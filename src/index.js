import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from "react-router-dom" 
import CreatePet from './components/CreatePet';
import CreateCustomer from './components/CreateCustomer';
import AllPets from './components/AllPets';
import AllCustomers from './components/AllCustomers';
import PendingCustomer from './components/PendingCustomer';
import PendingPet from './components/PendingPet';
import { AllVendorPetOrders } from './components/AllVendorPetOrders';
import AllVendorCustomerOrders from './components/AllVendorCustomerOrders';
import UpdateCustomer from './components/UpdateCustomer';
import UpdatePet from './components/UpdatePet';

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
    path: '/all-pets',
    element: <AllPets />,
  },
  {
    path : '/all-customers',
    element : <AllCustomers />
  },
  {
    path : '/pending-customer',
    element : <PendingCustomer />
  },
  {
    path : "/pending-pet",
    element : <PendingPet /> 
  },
  {
    path : "/user/customer/history",
    element : <AllVendorCustomerOrders />
  },
  {
    path : '/user/pet/history',
    element : <AllVendorPetOrders />
  },
  {
    path : "/update-customer",
    element : <UpdateCustomer />
  },
  {
    path : "/update-pet",
    element : <UpdatePet />
  }
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
