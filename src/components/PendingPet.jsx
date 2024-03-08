import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PetOrder } from './PetOrder';
import TopNav from './TopNav';  

function PendingPet() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(`https://${process.env.REACT_APP_ENDPOINT}/pending-pet`)
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

      <h2>所有挂起的宠物标本订单</h2>

      {
        data.map((item)=>{
          return <PetOrder details={item} />
        })
      }
    </div>

  );
}

export default PendingPet;
