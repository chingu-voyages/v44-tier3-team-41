const { OpenAIApi } = require('openai');
const express = require('express');
const { OPENAI_API_KEY } = require('../../config');

const openai = new OpenAIApi(OPENAI_API_KEY);

const router = express.Router();

//! OpenAI API
router.post('/', async (req, res) => {
    const { input } = req.body;

    try {
        const response = await openai.createCompletion({
            engine: 'davinci',
            prompt: input,
            max_tokens: 100,
            temperature: 0.5,
        });

        res.json({ message: response.choices[0].text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
