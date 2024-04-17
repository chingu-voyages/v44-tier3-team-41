const express = require('express');
const {Op} = require('sequelize');
const bcrypt = require('bcryptjs');
const {requireAuth} = require('../../utils/auth');
const {Mentor, Mentee} = require('../../db/models');

const router = express.Router();

//! Query Mentor search parameters

router.get('/', async (req, res) => {
	const {
		name,
		city,
		state,
		country,
		minYrsExp,
		maxYrsExp,
		expertise,
		role,
		company,
	} = req.query;

	const query = {
		where: {},
	};

	// ? capitalize the first letter of every word in the input
	const capitalizeFirstLetters = str => {
		return str.replace(/\b\w/g, match => {
			return match.toUpperCase();
		});
	};

	//* Name Filter
	if (name) query.where.name = {[Op.like]: `%${capitalizeFirstLetters(name)}%`};

	//* City Filter
	if (city) query.where.city = {[Op.like]: `%${capitalizeFirstLetters(city)}%`};

	//* State Filter
	if (state)
		query.where.state = {[Op.like]: `%${capitalizeFirstLetters(state)}%`};

	//* Country Filter
	if (country)
		query.where.country = {[Op.like]: `%${capitalizeFirstLetters(country)}%`};

	//* Role Filter
	if (role) query.where.role = {[Op.like]: `%${capitalizeFirstLetters(role)}%`};

	//* Company Filter
	if (company)
		query.where.company = {[Op.like]: `%${capitalizeFirstLetters(company)}%`};

	//* yrsExp Filters
	if (minYrsExp && maxYrsExp) {
		query.where.bedroom = {
			[Op.lt]: maxYrsExp,
			[Op.gt]: minYrsExp,
		};
	} else if (minYrsExp && !maxYrsExp) {
		query.where.bedroom = {
			[Op.gt]: minYrsExp,
		};
	} else if (!minYrsExp && maxYrsExp) {
		query.where.bedroom = {
			[Op.lt]: maxYrsExp,
		};
	}

	//* Expertise Filter
	if (expertise)
		query.where.expertise = {
			[Op.like]: `%${capitalizeFirstLetters(expertise)}%`,
		};

	//* Page filters
	let {page} = req.query;
	!page ? (page = 0) : (page = parseInt(req.query.page));

	//* Size filters
	let {size} = req.query;
	!size ? (size = 20) : (size = parseInt(req.query.size));

	//* Limit & Offset parameters
	if (page > 0 && size > 0) {
		query.limit = size;
		query.offset = size * (page - 1);
	}

	//* Query for all the mentors
	const Mentors = await Mentor.findAll(query);

	const response = {
		Mentors,
	};

	//! No mentors found error message
	if (Mentors.length === 0) {
		return res.status(404).json({
			message: 'No mentor is found for the current search parameters',
			statusCode: 404,
		});
	}

	//! Send response to client
	if (!Object.entries(req.query).length) {
		res.json(response);
	} else {
		response.page = page;
		response.size = size;
		res.json(response);
	}
});

/** ************************************************************* */

//! Query Mentor by Id
router.get('/:id', async (req, res) => {
	const mentorObj = await Mentor.findOne({
		where: {id: req.params.id},
		attributes: {exclude: ['hashedPassword']},
		include: [
			{
				model: Mentee,
				attributes: [
					'name',
					'email',
					'city',
					'state',
					'country',
					'profileImg',
					'goal',
					'occupation',
					'skill',
				],
			},
		],
	});

	return res.json(mentorObj);
});

/** ***************************************************************** */

//! update Password
router.put('/password/update', requireAuth, async (req, res) => {
	const {id, oldPassword, password} = req.body;

	try {
		// Find the Mentor by ID
		const mentor = await Mentor.scope('loginMentor').findByPk(id);

		// Check if the Mentor exists
		if (!mentor) {
			return res.status(404).json({
				message: "Mentor couldn't be found",
				statusCode: 404,
			});
		}

		// Validate the old password
		if (!mentor.validatePassword(oldPassword)) {
			return res.status(401).json({
				message: 'Incorrect old password',
				statusCode: 401,
			});
		}

		// Generate the hashed password
		const hashedPassword = bcrypt.hashSync(password);

		// Update the Mentor's password
		await mentor.update({hashedPassword});

		return res.json({
			message: 'Password updated successfully',
			statusCode: 200,
		});
	} catch (error) {
		console.error('Error updating password:', error);
		return res.status(500).json({
			message: 'Internal server error',
			statusCode: 500,
		});
	}
});
/** ***************************************************************** */

//! Edit Mentor by Id
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
		yrsExp,
		about,
		role,
		expertise,
		company,
	} = req.body;

	const editedMentor = await Mentor.findByPk(req.params.id);

	if (!editedMentor) {
		return res.status(404).json({
			message: "User couldn't be found",
			statusCode: 404,
		});
	}
	// Check if the user is authorized to update the mentee record
	if (req.user.id !== editedMentor.id) {
		return res.status(403).json({message: 'Unauthorized', statusCode: '403'});
	}

	const updatedMentor = await Mentor.upgrade({
		id: req.params.id,
		name,
		email,
		countryCode,
		phone,
		city,
		state,
		country,
		profileImg,
		yrsExp,
		about,
		role,
		expertise,
		company,
	});

	return res.json(updatedMentor);
});

module.exports = router;
