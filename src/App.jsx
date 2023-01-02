import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CommonTable } from './components/common/table';
import MainLayout from './components/layout';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/list",
    element: <CommonTable />,
  },
  {
    path: "/layout",
    element: <MainLayout />,
  },
  
]);


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
