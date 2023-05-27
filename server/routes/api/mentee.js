const express = require('express');
const { Op } = require('sequelize');
const { Mentee, Mentor } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

//! Query for all Mentees

router.get('/', async (req, res) => {
  const {
    name,
    city,
    state,
    country,
    goal,
    occupation,
  } = req.body;

  const query = {
    where: {}
  };

  // ? capitalize the first letter of every word in the input
  const capitalizeFirstLetters = (str) => {
    return str.replace(/\b\w/g, (match) => {
      return match.toUpperCase();
    });
  };

  //* Name Filter
  if (name) query.where.name = { [Op.like]: `%${capitalizeFirstLetters(name)}%` };

  //* City Filter
  if (city) query.where.city = { [Op.like]: `%${capitalizeFirstLetters(city)}%` };

  //* State Filter
  if (state) query.where.state = { [Op.like]: `%${capitalizeFirstLetters(state)}%` };

  //* Country Filter
  if (country) query.where.country = { [Op.like]: `%${capitalizeFirstLetters(country)}%` };

  //* Goal Filter
  if (goal) query.where.goal = { [Op.like]: `%${capitalizeFirstLetters(goal)}%` };

  //* Occupation Filter
  if (occupation) query.where.occupation = { [Op.like]: `%${capitalizeFirstLetters(occupation)}%` };

  //* Page filters
  let { page } = req.query;
  !page ? (page = 0) : (page = parseInt(req.query.page));

  //* Size filters
  let { size } = req.query;
  !size ? (size = 20) : (size = parseInt(req.query.size));

  //* Limit & Offset parameters
  if (page > 0 && size > 0) {
    query.limit = size;
    query.offset = size * (page - 1);
  }

  //* Query for all the mentees
  const Mentees = await Mentee.findAll(query);

  const response = {
    Mentees,
  };

  //! No mentors found error message
  if (Mentees.length === 0) {
    return res.status(404).json({
      message: 'No mentee is found for the current search parameters',
      statusCode: 404
    });
  }

  // Send response to client
  if (!Object.entries(req.query).length) {
    res.json(response);
  } else {
    response.page = page;
    response.size = size;
    res.json(response);
  }
});
/** ******************************************************** */

//! Query Mentee by Id
router.get('/:id', requireAuth, async (req, res) => {
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

router.put('/:id', requireAuth, async (req, res) => {
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
  if (req.user.id !== editedMentee.id) {
    return res.status(403).json({ message: 'Unauthorized', statusCode: '403' });
  }

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
