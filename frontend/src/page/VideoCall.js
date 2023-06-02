import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
	MeetingProvider,
	MeetingConsumer,
	useMeeting,
	useParticipant,
} from '@videosdk.live/react-sdk';
import ReactPlayer from 'react-player';

const authToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5NGMwZTg4Zi1lNmIzLTRlMjUtOGIwOS00ZTcxMWNkNDI4MTAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NTY0OTg2NCwiZXhwIjoxNjg4MjQxODY0fQ.NSaFTb2zdsfFQyjhq9TDJD_iqqsjBocftzabEkyKjlw';

const createMeeting = async ({token}) => {
	const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
		method: 'POST',
		headers: {
			authorization: `${authToken}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	});
	//Destructuring the roomId from the response
	const {roomId} = await res.json();
	return roomId;
};

function JoinScreen({getMeetingAndToken}) {
	const [meetingId, setMeetingId] = useState(null);
	const onClick = async () => {
		await getMeetingAndToken(meetingId);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Enter Meeting Id"
				onChange={e => {
					setMeetingId(e.target.value);
				}}
			/>
			<button onClick={onClick}>Join</button>
			{' or '}
			<button onClick={onClick}>Create Meeting</button>
		</div>
	);
}

function ParticipantView(props) {
	const micRef = useRef(null);
	const {webcamStream, micStream, webcamOn, micOn, isLocal, displayName} =
		useParticipant(props.participantId);

	const videoStream = useMemo(() => {
		if (webcamOn && webcamStream) {
			const mediaStream = new MediaStream();
			mediaStream.addTrack(webcamStream.track);
			return mediaStream;
		}
	}, [webcamStream, webcamOn]);

	useEffect(() => {
		if (micRef.current) {
			if (micOn && micStream) {
				const mediaStream = new MediaStream();
				mediaStream.addTrack(micStream.track);

				micRef.current.srcObject = mediaStream;
				micRef.current
					.play()
					.catch(error =>
						console.error('videoElem.current.play() failed', error)
					);
			} else {
				micRef.current.srcObject = null;
			}
		}
	}, [micStream, micOn]);

	return (
		<div key={props.participantId}>
			<p>
				Participant: {displayName} | Webcam: {webcamOn ? 'ON' : 'OFF'} | Mic:{' '}
				{micOn ? 'ON' : 'OFF'}
			</p>
			<audio ref={micRef} autoPlay muted={isLocal} />
			{webcamOn && (
				<ReactPlayer
					//
					playsinline // very very imp prop
					pip={false}
					light={false}
					controls={false}
					muted={true}
					playing={true}
					//
					url={videoStream}
					//
					height={'200px'}
					width={'300px'}
					onError={err => {
						console.log(err, 'participant video error');
					}}
				/>
			)}
		</div>
	);
}

function Controls() {
	const {leave, toggleMic, toggleWebcam} = useMeeting();
	return (
		<div>
			<button onClick={() => leave()}>Leave</button>
			<button onClick={() => toggleMic()}>toggleMic</button>
			<button onClick={() => toggleWebcam()}>toggleWebcam</button>
		</div>
	);
}

function MeetingView(props) {
	const [joined, setJoined] = useState(null);
	const {join} = useMeeting();
	const {participants} = useMeeting({
		onMeetingJoined: () => {
			setJoined('JOINED');
		},
		onMeetingLeft: () => {
			props.onMeetingLeave();
		},
	});
	const joinMeeting = () => {
		setJoined('JOINING');
		join();
	};

	return (
		<div className="container">
			<h3>Meeting Id: {props.meetingId}</h3>
			{joined && joined == 'JOINED' ? (
				<div>
					<Controls />
					{[...participants.keys()].map(participantId => (
						<ParticipantView
							participantId={participantId}
							key={participantId}
						/>
					))}
				</div>
			) : joined && joined == 'JOINING' ? (
				<p>Joining the meeting...</p>
			) : (
				<button onClick={joinMeeting}>Join</button>
			)}
		</div>
	);
}

function VideoCall() {
	const [meetingId, setMeetingId] = useState(null);

	const getMeetingAndToken = async id => {
		const meetingId = id == null ? await createMeeting({token: authToken}) : id;
		setMeetingId(meetingId);
	};

	const onMeetingLeave = () => {
		setMeetingId(null);
	};

	return authToken && meetingId ? (
		<MeetingProvider
			config={{
				meetingId,
				micEnabled: true,
				webcamEnabled: true,
				name: 'C.V. Raman',
			}}
			token={authToken}>
			<MeetingConsumer>
				{() => (
					<MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
				)}
			</MeetingConsumer>
		</MeetingProvider>
	) : (
		<JoinScreen getMeetingAndToken={getMeetingAndToken} />
	);
}

export default VideoCall;
