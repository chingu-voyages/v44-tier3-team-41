import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import HomePage from './page/Home';
import LoginForm from './components/Login/LoginForm';
import SignupMentor from './components/Signup/SignupMentor';
import SignupMentee from './components/Signup/SignupMentee';
import MentorDetail from './page/MentorDetail';
import MenteeDetail from './page/MenteeDetail';
import DashBoardSideBar from './page/DashBoardSideBar';
import MenteeList from './page/MenteeList';
import MessageBoard from './page/MessageBoard';
import DirectMessage from './page/DirectMessage';
import SearchMentors from './page/SearchMentors';
import SearchMentees from './page/SearchMentees';
import Report from './page/Report';
import Profile from './page/Profile';
import JobBoard from './page/JobBoard';
import AiChat from './page/AiChat';
import VideoCall from './page/VideoCall';
import AboutUs from './page/AboutUs';
import {restoreUserThunk} from './store/session';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchUser = async () => {
			await dispatch(restoreUserThunk());
		};
		fetchUser();
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/login"
					element={<LoginForm />}
				/>
				<Route
					path="/signupMentor"
					element={<SignupMentor />}
				/>
				<Route
					path="/signupMentee"
					element={<SignupMentee />}
				/>
				<Route
					path="/dashboard"
					element={<DashBoardSideBar />}>
					<Route
						path="aboutUs"
						element={<AboutUs />}
					/>
					<Route
						path="menteelist"
						element={<MenteeList />}
					/>
					<Route
						path="messageBoard"
						element={<MessageBoard />}
					/>
					<Route
						path="searchMentors"
						element={<SearchMentors />}
					/>
					<Route
						path="searchMentees"
						element={<SearchMentees />}
					/>
					<Route
						path="report"
						element={<Report />}
					/>
					<Route
						path="userProfile"
						element={<Profile />}
					/>
					<Route
						path="mentor_detail"
						element={<MentorDetail />}
					/>
					<Route
						path="mentee_detail"
						element={<MenteeDetail />}
					/>
					<Route
						path="directMessage"
						element={<DirectMessage />}
					/>
					<Route
						path="jobBoard"
						element={<JobBoard />}
					/>
					<Route
						path="aiChatBot"
						element={<AiChat />}
					/>
					<Route
						path="videoCall"
						element={<VideoCall />}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
