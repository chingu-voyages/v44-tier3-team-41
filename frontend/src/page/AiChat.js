import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AiChat = () => {
	const [messages, setMessages] = useState(
		JSON.parse(localStorage.getItem('messages')) || []
	);
	const [input, setInput] = useState('');

	useEffect(() => {
		localStorage.setItem('messages', JSON.stringify(messages));
	}, [messages]);

	const getResponse = async message => {
		try {
			const response = await axios.post('http://localhost:8080', {
				input: message,
			}); // replace this with your GPT API endpoint
			return response.data.message;
		} catch (err) {
			console.error(err);
			return 'Error getting response';
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();

		setMessages([...messages, {text: input, user: 'human'}]);
		setInput('');

		const response = await getResponse(input);

		setMessages(prevMessages => [
			...prevMessages,
			{text: response, user: 'AI'},
		]);
	};

	const handleClear = () => {
		localStorage.removeItem('messages');
		setMessages([]);
	};

	return (
		<div>
			<h1>Chat with GPT</h1>
			<div>
				{messages.map((message, index) => (
					<p key={index}>
						<strong>{message.user}:</strong> {message.text}
					</p>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
					required
				/>
				<button type="submit">Send</button>
			</form>
			<button onClick={handleClear}>Clear Chat</button>
		</div>
	);
};

export default AiChat;
