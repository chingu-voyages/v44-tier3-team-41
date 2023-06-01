const { Configuration, OpenAIApi } = require('openai');
const express = require('express');

const configuration = new Configuration({
    organization: 'org-RXoakR4d3wdHI1q8QoZIq3Xy',
    apiKey: '********************',
});
const openai = new OpenAIApi(configuration);

const router = express.Router();

//! Openai API
router.post('/', async (req, res) => {
    const { input } = req.body;

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: input,
        max_tokens: 100,
        temperature: 0.5,
    });
    res.json({ message: response.data.choices[0].text });
});

module.exports = router;
