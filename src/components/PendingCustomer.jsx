import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerOrder from './CustomerOrder';
import TopNav from './TopNav';

function PendingCustomer() {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/pending-customer`)
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[])

  return (

  <div>
      <TopNav />
      <nav className="nav">
        <Link className="nav-link" to={"/pending-customer"}>
          Pending Customer Orders
        </Link>
        <Link className="nav-link" to={"/pending-pet"}>
          Pending Pet Orders
        </Link>

        <input style={{width: "50%"}} type="text" placeholder="Search.."/>
      </nav>

      <h2>All Pending Customer Specimen Orders</h2>

    {
      data.map((item)=>{
         return <CustomerOrder details={item} />
        })
    }
  </div>

  );
}

export default PendingCustomer;
