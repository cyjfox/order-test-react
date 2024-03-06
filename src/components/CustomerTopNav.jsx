import React from 'react'
import { Link } from 'react-router-dom';

export const CustomerTopNav = () => {
  return (
      <nav className='top-nav'>
        <Link className="top-nav-link" to={"/create-customer"}>
          Create Order
        </Link>
        <Link className="top-nav-link" to={"/user/customer/history"}>
          Order History
        </Link>
      </nav>
  )
}

export default CustomerTopNav;
