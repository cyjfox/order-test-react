import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PetOrder } from './PetOrder';
import TopNav from './TopNav';  

function PendingPet() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5050/pending-pet')
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

      <h2>All Pending Pet Specimen Orders</h2>

      {
        data.map((item)=>{
          return <PetOrder details={item} />
        })
      }
    </div>

  );
}

export default PendingPet;
