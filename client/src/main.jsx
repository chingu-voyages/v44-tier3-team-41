import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/Home.jsx";
import LoginPage from "./page/Login.jsx";
import SignupPage from "./page/Signup.jsx";
import MentorDetail from "./page/MentorDetail.jsx";
import MenteeDetail from "./page/MenteeDetail.jsx";
import DashBoardSideBar from "./page/DashBoardSideBar.jsx";
import Message from "./page/Message.jsx";
import Search from "./page/Search.jsx";
import ProfileMentor from "./page/ProfileMentor.jsx";
import ProfileMentee from "./page/ProfileMentee.jsx";
import Report from "./page/Report.jsx";
import "./index.css";
import MentorList from "./page/MentorList.jsx";
import MenteeList from "./page/MenteeList.jsx";
import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/ProfileMentee",
    // path: "/mentor_detail/:id",
    element: <ProfileMentee />,
  },
  {
    path: "/",
    element: <DashBoardSideBar />,
    children: [
      {
        path: "/dashboard/mentorlist",
        element: <MentorList />,
      },
      {
        path: "/dashboard/menteelist",
        element: <MenteeList />,
      },
      {
        path: "/dashboard/message",
        element: <Message />,
      },
      {
        path: "/dashboard/search",
        element: <Search />,
      },
      {
        path: "/dashboard/profile",
        element: <ProfileMentor />,
      },
      {
        path: "/dashboard/report",
        element: <Report />,
      },
      {
        path: "/mentor_detail/:id",
        element: <MentorDetail />,
      },
      {
        path: "/mentee_detail/:id",
        element: <MenteeDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
