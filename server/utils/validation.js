const {validationResult, check, param, query} = require('express-validator');

// middleware for formatting errors from express-validator middleware

const handleValidationErrors = (req, _res, next) => {
	const validationErrors = validationResult(req);

	if (!validationErrors.isEmpty()) {
		const errors = validationErrors.array().map(error => `${error.msg}`);

		const err = Error('Validation Error.');
		err.errors = errors;
		err.status = 400;
		err.title = 'Bad request.';
		return next(err);
	}
	next();
};

const validateSpot = [
	check('address')
		.exists({checkFalsy: true})
		.withMessage('Street address is required'),
	check('city')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('City is required'),
	check('state')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('State is required'),
	check('country')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('Country is required'),
	check('type')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('type is required'),
	check('title')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('Title is required'),
	// check('lat')
	//   .isFloat()
	//   .withMessage('Latitude is not valid'),
	// check('lng')
	//   .isFloat()
	//   .withMessage('Longitude is not valid'),
	check('description')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('Description is required'),
	check('bedroom')
		.exists({checkFalsy: true})
		.isNumeric()
		.withMessage('Number of bedrooms is required'),
	check('bed')
		.exists({checkFalsy: true})
		.isNumeric()
		.withMessage('Number of beds is required'),
	check('bathroom')
		.exists({checkFalsy: true})
		.isNumeric()
		.withMessage('Number of bathrooms is required'),
	check('price')
		.exists({checkFalsy: true})
		.isNumeric()
		.withMessage('Price per day is required'),
	check('maxGuests')
		.exists({checkFalsy: true})
		.isNumeric()
		.withMessage('max number of guests is required'),
	handleValidationErrors,
];

const validateLogin = [
	check('credential')
		.exists({checkFalsy: true})
		.notEmpty()
		.withMessage('Please provide a valid email or username.'),
	check('password')
		.exists({checkFalsy: true})
		.withMessage('Please provide a password.'),
	handleValidationErrors,
];

const validateSignup = [
	check('email')
		.exists({checkFalsy: true})
		.isEmail()
		.withMessage('Please provide a valid email.'),
	check('username')
		.exists({checkFalsy: true})
		.isLength({min: 3})
		.withMessage('Please provide a username with at least 4 characters.'),
	check('username').not().isEmail().withMessage('Username cannot be an email.'),
	check('password')
		.exists({checkFalsy: true})
		.isLength({min: 6})
		.withMessage('Password must be 6 characters or more.'),
	check('name')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('Name is required'),
	handleValidationErrors,
];

const filterQueryValidator = [
	query('page')
		.optional()
		.isInt({min: 0, max: 10})
		.withMessage('Page must be greater than or equal to 0'),
	query('size')
		.optional()
		.isInt({min: 0, max: 20})
		.withMessage('Size must be greater than or equal to 0'),
	query('maxLat')
		.optional()
		.isFloat({min: -400, max: 400})
		.withMessage('Maximum latitude is invalid'),
	query('minLat')
		.optional()
		.isFloat({min: -400, max: 400})
		.withMessage('Minimum latitude is invalid'),
	query('minLng')
		.optional()
		.isFloat({min: -400, max: 400})
		.withMessage('Minimum longitude is invalid'),
	query('maxLng')
		.optional()
		.isFloat({min: -400, max: 400})
		.withMessage('Maximum longitude is invalid'),
	query('minPrice')
		.optional()
		.isFloat({min: 0})
		.withMessage('Minimum price must be greater than or equal to 0'),
	query('maxPrice')
		.optional()
		.isFloat({min: 1})
		.withMessage('Maximum price must be greater than or equal to 0'),
	handleValidationErrors,
];

const reviewValidation = [
	check('review')
		.exists({checkFalsy: true})
		.isString()
		.withMessage('Review text is required'),
	check('stars')
		.exists({checkFalsy: true})
		.isInt({min: 1, max: 5})
		.withMessage('Stars must be an integer from 1 to 5'),
	handleValidationErrors,
];

const bookingValidation = [
	check('startDate').exists().notEmpty().withMessage('Must provide start date'),
	check('endDate').exists().notEmpty().withMessage('Must provide end date'),
	handleValidationErrors,
];

const spotIdValidation = [
	param('spotId').isNumeric().withMessage('Spot id must be an integer'),
	handleValidationErrors,
];

const bookingIdValidation = [
	param('bookingId').isNumeric().withMessage('Booking id must be an integer'),
	handleValidationErrors,
];

module.exports = {
	handleValidationErrors,
	validateSpot,
	validateLogin,
	validateSignup,
	filterQueryValidator,
	reviewValidation,
	bookingValidation,
	spotIdValidation,
	bookingIdValidation,
};
