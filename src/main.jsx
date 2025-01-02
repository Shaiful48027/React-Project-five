import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Root2 from './components/Root2.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root2></Root2>,
    children: [
      {
        path: ('/home'),
        element: <Home></Home>
      },
      {
        path: ('/login'),
        element: <Login></Login>
      },
      {
        path: ('/register'),
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
