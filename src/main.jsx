import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './providers/AuthProviders';
import Order from './components/Order';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/order',
        element: <PrivateRoutes><Order></Order></PrivateRoutes>
      },
      {
        path:'/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
