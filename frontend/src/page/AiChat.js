import React, {useState, useEffect} from 'react';
import {csrfFetch} from '../store/csrf';
import {
	PaperAirplaneIcon,
	TrashIcon,
} from '@heroicons/react/20/solid';
import {useSelector} from 'react-redux';
import dm_icon_blk_blue from '../assets/dm_icon_blk_blue.png';

const AiChat = () => {
	const [messages, setMessages] = useState(
		JSON.parse(
			localStorage.getItem('messages')
		) || []
	);

	const {Mentees, ...sessionUser} = useSelector(
		state => state.session.user
	);

	const [input, setInput] = useState('');

	useEffect(() => {
		localStorage.setItem(
			'messages',
			JSON.stringify(messages)
		);
	}, [messages]);

	const getResponse = async message => {
		try {
			const response = await csrfFetch(
				'/api/chat',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({input: message}),
				}
			);

			const data = await response.json();
			return data.message;
		} catch (err) {
			console.error(err);
			return 'Error getting response';
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();

		setMessages([
			...messages,
			{text: input, user: sessionUser},
		]);
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
		<div className="flex">
			<div className="bg-dark2 w-screen text-light1 flex flex-col items-center justify-center h-[750px] px-2 py-10 rounded-xl shadow-xl">
				<h1 className="mb-5 text-2xl font-bold">
					Chat with GPT
				</h1>
				<div className="flex-1 text-left md:w-2/4 w-full px-3 space-y-2 overflow-auto">
					{messages.map((message, index) => (
						<div
							className={
								'flex justify-start items-center bg-dark1 rounded-lg shadow-lg pl-2 py-3 text-sm text-light4' +
								(message.user === 'AI'
									? ' bg-dark3'
									: '')
							}>
							<div className="flex flex-row items-center">
								<img
									src={`${
										message.user === 'AI'
											? dm_icon_blk_blue
											: sessionUser.profileImg
									}`}
									alt="user_profile"
									className={`${
										message.user === 'AI'
											? 'w-10 h-10 object-cover'
											: 'w-10 h-10 rounded-full object-cover border'
									}`}
								/>
							</div>
							<p className="pl-4">
								{message.text}
							</p>
						</div>
					))}
				</div>
				<div className="bg-dark3 text-dark6 rounded-lg text-sm w-1/2 mt-3">
					<form
						onSubmit={handleSubmit}
						className="p-3 space-x-5 flex">
						<input
							className="flex-1 bg-transparent focus:outline-none text-light1"
							type="text"
							value={input}
							onChange={e =>
								setInput(e.target.value)
							}
							placeholder="Type your message here..."
							required
						/>
						<button
							type="submit"
							className="px-4 py-2 bg-dark1 hover:opacity-80 rounded-lg text-light1 font-bold">
							<PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
						</button>
					</form>
				</div>
				<div className="mt-4">
					<button
						onClick={handleClear}
						className="flex items-center px-4 py-2 bg-dark1 hover:opacity-80 text-light1 font-bold border border-dark6 hover:border-red-700 rounded-lg">
						<TrashIcon className="w-4 h-4 block" />
						<p className="pl-2 text-sm font-medium">
							Clear Chat
						</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AiChat;
