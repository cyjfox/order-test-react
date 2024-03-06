import React from 'react'
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className='top-nav'>
      <Link className="top-nav-link" to={"/all-customers"}>
        All Orders
      </Link>
      <Link className="top-nav-link" to={"/pending-customer"}>
        Pending Orders
      </Link>
    </nav>
  )
}

export default TopNav;
