import Talk from 'talkjs';
import {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

function DirectMessage() {
	const data = useLocation();
	const otherUser = data.state;

	const currentUser = useSelector(state => state.session.user);
	const chatboxEl = useRef();
	// wait for TalkJS to load
	const [talkLoaded, markTalkLoaded] = useState(false);

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

			const other = new Talk.User({
				id: otherUser.email,
				name: otherUser.name,
				email: otherUser.email,
				photoUrl: otherUser.profileImg,
				welcomeMessage: 'Hello!',
				role: 'default',
			});

			const session = new Talk.Session({
				appId: 'tOv2gsZw',
				me: me,
			});

			const conversationId = Talk.oneOnOneId(me, other);
			const conversation = session.getOrCreateConversation(conversationId);
			conversation.setParticipant(me);
			conversation.setParticipant(other);

			const chatbox = session.createInbox();
			chatbox.select(conversation);
			chatbox.mount(chatboxEl.current);

			return () => session.destroy();
		}
	}, [talkLoaded]);

	return (
		<div>
			<div
				ref={chatboxEl}
				style={{width: '90%', margin: '30px', height: '500px'}}
			/>
		</div>
	);
}

export default DirectMessage;
