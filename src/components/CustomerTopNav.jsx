import React from 'react'
import { Link } from 'react-router-dom';

export const CustomerTopNav = () => {
  return (
      <nav className='top-nav'>
        <Link className="top-nav-link" to={"/create-customer"}>
          创建订单
        </Link>
        <Link className="top-nav-link" to={"/user/customer/history"}>
          订单历史
        </Link>
      </nav>
  )
}

export default CustomerTopNav;
