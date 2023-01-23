import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/index.jsx'
import Post from './pages/post/index.jsx'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/:title",
    element: <Post/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
