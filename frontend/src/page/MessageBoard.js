import Talk from 'talkjs';
import {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {ChatBubbleLeftIcon} from '@heroicons/react/24/outline';

function MessageBoard() {
	const currentUser = useSelector(
		state => state.session.user
	);
	const chatboxEl = useRef();
	// wait for TalkJS to load
	const [talkLoaded, markTalkLoaded] =
		useState(false);

	useEffect(() => {
		Talk.ready.then(() => markTalkLoaded(true));

		if (talkLoaded) {
			const me = new Talk.User({
				id: currentUser.email,
				name: currentUser.name,
				email: currentUser.email,
				photoUrl: currentUser.profileImg,
				welcomeMessage: 'Hello!',
				role: 'default',
			});

			const session = new Talk.Session({
				appId: 'tOv2gsZw',
				me: me,
			});

			const chatbox = session.createInbox();
			chatbox.mount(chatboxEl.current);
			return () => session.destroy();
		}
	}, [talkLoaded]);

	return (
		<div>
			<div className="mb-5 bg-gradient-to-r from-dark1 to-dark3 shadow-lg shadow-dark6/30 w-1/4 rounded-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
				<h2 className="p-3 text-center text-light3 font-normal text-sm tracking-wide">
					<ChatBubbleLeftIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
					Chat history
				</h2>
			</div>
			<div className="bg-[#fafafa] p-5 shadow-lg rounded-lg border border-light4 mt-5">
				<div
					ref={chatboxEl}
					style={{
						width: '90%',
						margin: '30px',
						height: '500px',
					}}
				/>
			</div>
		</div>
	);
}

export default MessageBoard;
