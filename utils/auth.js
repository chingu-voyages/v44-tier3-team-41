const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { Mentee, Mentor } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

const setTokenCookie = (res, user) => {
    // Create the token.
    const token = jwt.sign(
        { data: user },
        secret,
        { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === 'production';

    // Set the token cookie
    res.cookie('token', token, {
        maxAge: expiresIn * 1000, // maxAge in milliseconds
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && 'Lax',
    });

    return token;
};

const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            return next();
        }

        try {
            const { id, classification } = jwtPayload.data;
            let User = null;

            if (classification === 'Mentee') {
                User = Mentee;
            } else if (classification === 'Mentor') {
                User = Mentor;
            }

            if (User) {
                req.user = await User.findByPk(id);
            }
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) {
            res.clearCookie('token');
        }

        return next();
    });
};

const requireAuth = (req, _res, next) => {
    if (req.user) {
        return next();
    }

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
};

module.exports = { setTokenCookie, restoreUser, requireAuth };
