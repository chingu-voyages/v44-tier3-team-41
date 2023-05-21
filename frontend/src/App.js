import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./page/Home";
import LoginPage from "./page/Login";
import SignupPage from "./page/Signup";
import MentorDetail from "./page/MentorDetail";
import MenteeDetail from "./page/MenteeDetail";
import DashBoardSideBar from "./page/DashBoardSideBar";
import MentorList from "./page/MentorList";
import MenteeList from "./page/MenteeList";
import Message from "./page/Message";
import Search from "./page/Search";
import Report from "./page/Report";
import Profile from "./page/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashBoardSideBar />}>
          <Route path="mentorlist" element={<MentorList />} />
          <Route path="menteelist" element={<MenteeList />} />
          <Route path="message" element={<Message />} />
          <Route path="search" element={<Search />} />
          <Route path="report" element={<Report />} />
          <Route path="userProfile" element={<Profile />} />
          <Route path="mentor_detail/1" element={<MentorDetail />} />
          <Route path="mentee_detail/1" element={<MenteeDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
