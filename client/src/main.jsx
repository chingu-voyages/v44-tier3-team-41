<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/Home.jsx";
import LoginPage from "./page/Login.jsx";
import SignupPage from "./page/Signup.jsx";
import MentorDetail from "./page/MentorDetail.jsx";
import MenteeDetail from "./page/MenteeDetail.jsx";
import App from "./App.jsx";
import "./index.css";
>>>>>>> dev

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>,
=======
    <RouterProvider router={router} />
  </React.StrictMode>
>>>>>>> dev
);
