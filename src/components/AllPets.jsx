import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PetOrder } from './PetOrder';
import TopNav from './TopNav';

function AllPets() {
  
  const [data, setData] = useState([])
  const [cancelled, setCancelled] = useState(true)


  useEffect(()=>{
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/view-all-pets`)
      .then(res => res.json())
      .then(fetched => setData(fetched))
  },[cancelled])


    function handleCancel(order_id){
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/cancel-pet/${order_id}`)
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

      <h2>All Pet Specimen Orders</h2>

    {
      data.map((item)=>{
         return <PetOrder handleCancel={handleCancel} details={item} />
        })
    }
  </div>

  );
}

export default AllPets;
