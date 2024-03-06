import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerOrder from './CustomerOrder';
import TopNav from './TopNav';

function AllCustomers() {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5050/view-all-customers')
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[])

  return (

  <div>
      <TopNav />
      <nav className="nav">
        <Link className="nav-link" to={"/all-customers"}>
          View All Customer Orders
        </Link>
        <Link className="nav-link" to={"/all-pets"}>
          View All Pet Orders
        </Link>

        <input style={{width: "50%"}} type="text" placeholder="Search.."/>
      </nav>

      <h2>All Customer Specimen Orders</h2>

    {
      data.map((item)=>{
         return <CustomerOrder details={item} />
        })
    }
  </div>

  );
}

export default AllCustomers;
