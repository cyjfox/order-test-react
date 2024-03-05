import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from "react-router-dom" 
import Homepage  from './components/Homepage';
import CreatePet from './components/CreatePet';
import CreateCustomer from './components/CreateCustomer';


const router = createBrowserRouter([
  {
    path: '/create-pet',
    element: <CreatePet />,
  },
  {
    path: '/create-customer',
    element: <CreateCustomer/>,
  },
  {
    path: '/contact',
    element: <App/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
