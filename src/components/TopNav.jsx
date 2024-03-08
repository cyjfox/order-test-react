import React from 'react'
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className='top-nav'>
      <Link className="top-nav-link" to={"/all-customers"}>
        所有订单
      </Link>
      <Link className="top-nav-link" to={"/pending-customer"}>
        挂起的订单
      </Link>
    </nav>
  )
}

export default TopNav;
