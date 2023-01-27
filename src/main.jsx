import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Portfolio from './pages/portfolio/index'
import BlogHome from './pages/blog/home/index.jsx'
import BlogPost from './pages/blog/post/index.jsx'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Portfolio/>,
  },
  {
    path: "/blog",
    element: <BlogHome/>,
  },
  {
    path: "/blog/:title",
    element: <BlogPost/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
