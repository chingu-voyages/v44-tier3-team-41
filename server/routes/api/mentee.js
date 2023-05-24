const express = require('express');

const { Mentee, Mentor } = require('../../db/models');

const router = express.Router();

//! Query for all Mentees
router.get('/', async (req, res) => {
  const menteesObj = await Mentee.findAll({ attributes: { exclude: ['hashedPassword'] } });

  return res.json(menteesObj);
});

//! Query Mentee by Id
router.get('/:id', async (req, res) => {
  const menteeObj = await Mentee.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['hashedPassword'] },
    include: [
      {
        model: Mentor,
        attributes: ['name', 'email', 'city', 'state', 'country', 'profileImg', 'role', 'yrsExp', 'expertise']
      }
    ]
  });

  return res.json(menteeObj);
});

/** ********************************************************************** */
//! Edit Mentee by id

router.put('/:id', async (req, res) => {
  const {
    name,
    email,
    countryCode,
    phone,
    city,
    state,
    country,
    profileImg,
    goal,
    about,
    occupation,
    skill,
    project,
    mentorId
  } = req.body;

  const editedMentee = await Mentee.findByPk(req.params.id);

  if (!editedMentee) {
    return res.status(404).json({
      message: "User couldn't be found",
      statusCode: 404
    });
  }
  // Check if the user is authorized to update the mentee record
  // if (req.user.id !== editedMentee.id) {
  //   return res.status(403).json({ message: 'Unauthorized', statusCode: '403' });
  // }

  const updatedMentee = await Mentee.upgrade({
    id: req.params.id,
    name,
    email,
    countryCode,
    phone,
    city,
    state,
    country,
    profileImg,
    goal,
    about,
    occupation,
    skill,
    project,
    mentorId
  });

  return res.json(updatedMentee);
});

module.exports = router;
