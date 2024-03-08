import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerOrder from './CustomerOrder';
import TopNav from './TopNav';





function AllCustomers() {

  const [data, setData] = useState([])
  const [cancelled, setCancelled] = useState(true)


  console.log(process.env.REACT_APP_ENDPOINT)

  useEffect(()=>{
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/view-all-customers`)
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[cancelled])

  function handleCancel(order_id){
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/cancel-customer/${order_id}`)
      .then(res => res.json())
      .then(data => {
        setCancelled(!cancelled)
        console.log(data)
      })
  }

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
          return <CustomerOrder handleCancel={handleCancel} details={item} />
        })
      }
    </div>

  );
}

export default AllCustomers;
