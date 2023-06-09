const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');

const { Mentee, Mentor } = require('../../db/models');

const router = express.Router();

//! Log in
router.post('/', async (req, res, next) => {
    const { email, password, classification } = req.body;

    let user;
    if (classification === 'Mentee') {
        user = await Mentee.login({ email, password });
    }
    if (classification === 'Mentor') {
        user = await Mentor.login({ email, password });
        //* User validation
        if (!user) {
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid.'];
            return next(err);
        }
        user = await Mentor.findOne({
            where: { id: user.id },
            attributes: { exclude: ['hashedPassword'] },
            include: [
                {
                    model: Mentee,
                    attributes: { exclude: ['hashedPassword', 'mentorId', ''] }
                }
            ]
        });
    }

    //* User validation
    if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({ user });
});

/** ******************************************************************************* */

//! Log out
router.delete('/', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
});

/** ******************************************************************************* */

//! Restore session user
router.get('/', restoreUser, async (req, res) => {
    let { user } = req;

    if (user) {
        if (user.dataValues.classification === 'Mentor') {
            user = await Mentor.findOne({
                where: { id: user.id },
                attributes: { exclude: ['hashedPassword'] },
                include: [
                    {
                        model: Mentee,
                        attributes: ['name', 'email', 'city', 'state', 'country', 'profileImg', 'goal', 'occupation', 'skill']
                    }
                ]
            });
            return res.json({
                user,
            });
        }
        return res.json({
            user,
        });
    } return res.json({});
});

module.exports = router;
