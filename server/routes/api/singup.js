const express = require('express');

const { setTokenCookie } = require('../../utils/auth');

const { Mentee, Mentor } = require('../../db/models');

const router = express.Router();

//! Sign up
router.post('/', async (req, res) => {
    const {
        name, email, password, classification
    } = req.body;

    let User;
    if (classification === 'Mentee') {
        User = Mentee;
    } else if (classification === 'Mentor') {
        User = Mentor;
    }

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
    });

    await setTokenCookie(res, user);

    return res.json({ user });
});

module.exports = router;
