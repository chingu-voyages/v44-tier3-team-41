const router = require('express').Router();
const mentorRouter = require('./mentor.js');
const menteeRouter = require('./mentee.js');

router.use('/mentor', mentorRouter);
router.use('/mentee', menteeRouter)

module.exports = router
