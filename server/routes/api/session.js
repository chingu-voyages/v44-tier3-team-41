const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');

const { Mentee, Mentor } = require('../../db/models');

const router = express.Router();

//! signup user

router.post('/new', async (req, res) => {
    const {
        name, email, password, profileImg, classification
    } = req.body;

    let User;
    if (classification === 'Mentee') {
        User = Mentee;
    } else if (classification === 'Mentor') {
        User = Mentor;
    }
    console.log(User);

    //* Email verification
    const emailVerification = await User.findOne({ where: { email } });

    if (emailVerification) {
        return res.status(403).json({
            message: 'User already exists',
            statusCode: 403,
            errors: {
                email: 'User with that email already exists',
            },
        });
    }

    //* Creation of a new user
    const user = await User.signup({
        name,
        email,
        password,
        profileImg,
        classification
    });

    await setTokenCookie(res, user);

    return res.json({ user });
});

/** ******************************************************************************* */
//! Log in
router.post('/', async (req, res, next) => {
    const { email, password, classification } = req.body;
    // console.log({ email, password, classification });
    let User;
    if (classification === 'Mentee') {
        User = Mentee;
    } else if (classification === 'Mentor') {
        User = Mentor;
    }
    const user = await User.login({ email, password });

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
router.get('/', restoreUser, (req, res) => {
    const { user } = req;

    if (user) {
        return res.json({
            user,
        });
    } return res.json({});
});

module.exports = router;
