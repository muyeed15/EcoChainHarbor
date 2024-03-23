import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import UserInfo from "./Components/Userinfo/UserInfo.jsx";
import SignupForm from "./Components/SignupForm/SignupForm.jsx";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import SingleUser from "./Components/SingleUser/SingleUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/signup",
        element: <SignupForm></SignupForm>,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
    ],
  },
  {
    path: "/user",
    element: <UserInfo></UserInfo>,
    loader: () => fetch("/public/public.json"),
  },
  {
    path: "/user/:userId",
    element: <Profile></Profile>,
    children: [
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <SingleUser></SingleUser>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
