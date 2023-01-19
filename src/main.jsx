import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/test.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
