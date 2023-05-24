const router = require('express').Router();
const mentorRouter = require('./mentor.js');
const menteeRouter = require('./mentee.js');
const sessionRouter = require('./session.js');
const signupRouter = require('./signup.js');
const { restoreUser } = require('../../utils/auth.js');

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/signup', signupRouter);
router.use('/mentor', mentorRouter);
router.use('/mentee', menteeRouter);

module.exports = router;
