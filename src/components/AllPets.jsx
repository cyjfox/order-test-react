import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PetOrder } from './PetOrder';
import TopNav from './TopNav';

function AllPets() {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5050/view-all-pets')
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

      <h2>All Pet Specimen Orders</h2>

    {
      data.map((item)=>{
         return <PetOrder details={item} />
        })
    }
  </div>

  );
}

export default AllPets;
