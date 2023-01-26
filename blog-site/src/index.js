import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import BlogsListPage from './pages/BlogsListPage';
import AuthorPage from './pages/AuthorPage';
import BlogPage from './pages/BlogPage';
 
const router = createBrowserRouter([
 {
  path: "/",
  element: <BlogsListPage />,
 },
 {
  path: "/blog",
  element: <BlogPage />,
 },
 {
  path: "/author",
  element: <AuthorPage />,
 },
  
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);