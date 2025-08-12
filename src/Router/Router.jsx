import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Home from '../Pages/Home/Home';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ProjectDetails from '../Pages/ProjectsDetails/ProjectDetails';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <ErrorPage/>,
      children:[
        {
          index: true,
          path:'/',
          loader: () => fetch('/projects.json'),
          hydrateFallbackElement: <p>Loading..</p>,
          Component: Home
        },
      ]
    },
    {
      path:'/projectDetails/:id',
      loader: () => fetch('/projects.json'),
      hydrateFallbackElement: <p>Loading..</p>,
      Component: ProjectDetails
    }
  ]);