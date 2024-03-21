import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import UserInfo from './Components/Userinfo/UserInfo.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element :<Home></Home>,
    children:[
      {
        path:'/login',
        element:<LoginForm></LoginForm>
      },

    ]
  },
  {
    path:'/user',
    element:<UserInfo></UserInfo>,
    children:[
      {
        path:'card',
        element: <></>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
