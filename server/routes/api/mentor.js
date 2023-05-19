const express = require('express');

const {Mentor} = require('../../db/models')

const router = express.Router();


//! Query for All Mentors
router.get('/', async (req, res)=>{

  const mentorsObj = await Mentor.findAll({attributes: {exclude: ['hashedPassword']}})

  return res.json(mentorsObj)
})

//! Query Mentor by Id
router.get('/:id',async (req, res) => {

  const mentorObj = await Mentor.findOne({ where: {id: req.params.id}, attributes: {exclude: ['hashedPassword']}
  });

  return res.json(mentorObj);
});


module.exports = router
