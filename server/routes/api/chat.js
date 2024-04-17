const {OpenAIApi, Configuration} = require('openai');
const express = require('express');
const {OPENAI_API_KEY, OPENORG} = require('../../config');

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const router = express.Router();

//! OpenAI API
router.post('/', async (req, res) => {
	const {input} = req.body;

	try {
		const response = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: input,
			max_tokens: 100,
			temperature: 0.5,
		});

		res.json({message: response.data.choices[0].text});
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({error: 'An error occurred'});
	}
});

module.exports = router;
