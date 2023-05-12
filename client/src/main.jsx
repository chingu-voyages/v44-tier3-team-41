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
import Profile from "./page/Profile.jsx";
import Report from "./page/Report.jsx";
import "./index.css";
import MentorList from "./page/MentorList.jsx";

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
    path: "/mentor_detail/1",
    // path: "/mentor_detail/:id",
    element: <MentorDetail />,
  },
  {
    path: "/mentee_detail/1",
    // path: "/mentor_detail/:id",
    element: <MenteeDetail />,
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
        path: "/dashboard/message",
        element: <Message />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/report",
        element: <Report />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
