import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerOrder from './CustomerOrder'
import CustomerTopNav from './CustomerTopNav'

const AllVendorCustomerOrders = () => {
  const [data, setData] = useState([])
  const [cancelled, setCancelled] = useState(true)


  useEffect(()=>{
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/vendor/customer`)
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

      <CustomerTopNav />

      <nav className="nav">
        <Link className="nav-link" to={"/user/customer/history"}>
          Customer Orders
        </Link>
        <Link className="nav-link" to={"/user/pet/history"}>
          Pet Orders
        </Link>



        <input style={{width: "50%"}} type="text" placeholder="Search.."/>
      </nav>

      <h2> Customer Order History</h2>

      {
        data.map((item)=>{
          return <CustomerOrder handleCancel={handleCancel} details={item} />
        })
      }
    </div>

  );
}

export default AllVendorCustomerOrders;
