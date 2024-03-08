import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerOrder from './CustomerOrder';
import TopNav from './TopNav';

function PendingCustomer() {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch(`https://${process.env.REACT_APP_ENDPOINT}/pending-customer`)
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[])

  return (

  <div>
      <TopNav />
      <nav className="nav">
        <Link className="nav-link" to={"/pending-customer"}>
          挂起客户订单
        </Link>
        <Link className="nav-link" to={"/pending-pet"}>
          挂起宠物订单
        </Link>

        <input style={{width: "50%"}} type="text" placeholder="Search.."/>
      </nav>

      <h2>所有挂起的客户标本订单</h2>

    {
      data.map((item)=>{
         return <CustomerOrder details={item} />
        })
    }
  </div>

  );
}

export default PendingCustomer;
