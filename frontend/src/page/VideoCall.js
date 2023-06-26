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
			<section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg">
				<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
					<h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-4xl dark:text-white">
						Video Chat
					</h1>
					<p class="mb-8 text-lg font-normal text-gray-500 lg:text-base sm:px-16 lg:px-48 dark:text-gray-400">
						Schedule a time slot to have effective guidance from our team of
						experienced mentors
					</p>
					<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						{/* Start Call */}
						<form class="w-full md:flex gap-4 max-w-2xl mx-auto">
							<label
								for="videocall"
								class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
								Video Call
							</label>
							<div class="relative md:flex-1">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										class="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
									</svg>
								</div>
								<input
									type="text"
									id="meeting-id"
									class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Enter Meeting Id here..."
									required
									onChange={e => {
										setMeetingId(e.target.value);
									}}
								/>
								<button
									onClick={onClick}
									className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Join Meeting
								</button>
							</div>
							<div className="pt-5 md:pt-0">
								<button
									onClick={onClick}
									className="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
									Create new meeting
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
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
		<div
			key={props.participantId}
			className="text-light4 text-sm border border-dark5 rounded-xl px-3 py-1">
			<p>
				Participant: {displayName} | Webcam: {webcamOn ? 'ON' : 'OFF'} | Mic:{' '}
				{micOn ? 'ON' : 'OFF'}
			</p>
			<audio
				ref={micRef}
				autoPlay
				muted={isLocal}
			/>
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
		<div className="text-white text-sm flex gap-5 justify-between mb-4">
			<button
				onClick={() => leave()}
				className="border border-dark5 bg-black rounded-xl px-3 py-1">
				Leave
			</button>
			<button
				onClick={() => toggleMic()}
				className="border border-dark5 bg-black rounded-xl px-3 py-1">
				toggleMic
			</button>
			<button
				onClick={() => toggleWebcam()}
				className="border border-dark5 bg-black rounded-xl px-3 py-1">
				toggleWebcam
			</button>
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
			<section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg">
				<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
					<h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-4xl dark:text-white">
						Video Chat
					</h1>
					<p class="mb-8 text-lg font-normal text-gray-500 lg:text-base sm:px-16 lg:px-48 dark:text-gray-400">
						Schedule a time slot to have effective guidance from our team of
						experienced mentors
					</p>
					<div class="">
						{/* Start Call */}
						<form class="w-full md:flex gap-4 max-w-2xl mx-auto justify-center items-center">
							<div className="border border-dark5 bg-black rounded-xl">
								<h3 className="p-4 text-base text-light3">
									<span className="text-sm text-dark6">Meeting Id:</span>{' '}
									{props.meetingId}
								</h3>
							</div>
							<div>
								{joined && joined === 'JOINED' ? (
									<div>
										<Controls />
										{[...participants.keys()].map(participantId => (
											<ParticipantView
												participantId={participantId}
												key={participantId}
											/>
										))}
									</div>
								) : joined && joined === 'JOINING' ? (
									<p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Joining the meeting...
									</p>
								) : (
									<button
										onClick={joinMeeting}
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Join
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</section>
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
					<MeetingView
						meetingId={meetingId}
						onMeetingLeave={onMeetingLeave}
					/>
				)}
			</MeetingConsumer>
		</MeetingProvider>
	) : (
		<JoinScreen getMeetingAndToken={getMeetingAndToken} />
	);
}

export default VideoCall;
