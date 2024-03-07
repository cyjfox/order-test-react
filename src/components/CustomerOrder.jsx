import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


const cookie = new Cookies()


function CustomerOrder(props) {

  
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  // destructuring props object
  const details = props.details

  const subStyle={
    padding : "10px",
    margin: "5px 0",
    backgroundColor: "#ccc",
    borderRadius: "5px"
  }

  const spanStyle = {
    padding : "5px",
    margin: "5px"
  }

  const bottomContainer = {
    borderRadius : "10px",
  }

  const subSpan = {
    fontWeight : "bold"
  }

  const leftContainer = {
    width : "90%",
    display : "flex",
  }

  const topContainer = {
    display : "flex",
    flexDirection : "row",
    width : "100%",
    backgroundColor : details.status === 'CANCELLED'? "lightpink" : "lightcyan",
    borderRadius :"10px",
    border : "1px solid black",
    padding : "5px",
  }

  const leftSubContainer = {
    display :"flex",
    flexDirection : "column",
    padding : "5px 5px",
    margin: "0 5px",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
  }

  const motherContainer = {
    minWidth :  "757px",
    marginTop : "5px"
  }

    const rightContainer = {
    width : "30%",
    display: "flex",
    alignItems : "center",
    justifyContent :"center"
  }

  const expandCollapseButton = {
    width : "fit-content",
    backgroundColor : "blue",
    margin : "0 10px",
    height : "fit-content",
  }

  const editButton = {
    width : "fit-content",
    backgroundColor : "green",
    height : "fit-content",
    margin : "0 10px"
  }

  const cancelButton = {
    width : "fit-content",
    backgroundColor : "red",
    height : "fit-content",
    margin : "0 10px"
  }

  
  function handleUpdate(){
    console.log('clicked')
    cookie.set('customer-info', details)
    navigate('/update-customer')
  }
  
  return (
    <div style={motherContainer}>

      <div style={topContainer}>

        <div style={leftContainer}>
          <div style={leftSubContainer}>
            <span style={{backgroundColor: "limegreen", borderRadius: "5px", width: "100px" }}>OrderID:</span>
            <span>{details.order_id}</span>          
          </div>

          <div style={leftSubContainer}>
            <span  style={{backgroundColor: "lightpink", borderRadius: "5px", width:"100px"}}>LabID :</span>
            <span>{details.lab_id}</span>         
          </div>

          <div style={leftSubContainer}>
            <span  style={{backgroundColor: "lightskyblue", borderRadius: "5px", width:"100px"}}>顾客ID :</span>
            <span>{details.customer_id}</span>           
          </div>

          <div style={leftSubContainer}>
            <span  style={{backgroundColor: "lightyellow", borderRadius: "5px", width:"100px"}}>Status :</span>
            <span>{details.status}</span>
          </div>

          <div style={leftSubContainer}>
            <span  style={{backgroundColor: "lightsteelblue", borderRadius: "5px", width:"100px"}}>User : </span>
            <span>{ details.user} </span>
          </div>

        </div>

        <div style={rightContainer}>
          <button onClick={()=>{setShow(!show) }} style={expandCollapseButton}>{show?"Collapse" : "Expand"}
          </button>

          <button onClick={()=>handleUpdate()} style={editButton}>Edit</button>
          
          {
            details.status === 'PENDING' && 
              <button style={cancelButton} onClick={()=> props.handleCancel(details.order_id)}>Cancel</button>
          }

        </div>
      </div>

      {show &&
        <div style={bottomContainer}>
          <div style={subStyle}> 
            <span style={spanStyle}>  <span style={subSpan}>Last Name: </span> {details.last_name} </span>
            <span style={spanStyle}>  <span style={subSpan}>First Name: </span> {details.first_name}</span>
            <span style={spanStyle}>  <span style={subSpan}>Chinese Name: </span> {details.Chinese_name}</span>
            <span style={spanStyle}>  <span style={subSpan}>Sex: </span> {details.sex} </span>
            <span style={spanStyle}>  <span style={subSpan}>ID Number: </span> {details.id_number}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Date of birth: </span> {details.date_of_birth}</span>
            <span style={spanStyle} > <span style={subSpan}>Email: </span> {details.email}</span>
            <span style={spanStyle} > <span style={subSpan}>Phone: </span> {details.phone}</span>
            <span style={spanStyle} > <span style={subSpan}>Ethnicity: </span>{details.ethnicity}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Height: </span>{details.height}</span>
            <span style={spanStyle} > <span style={subSpan}>Weight: </span>{details.weight}</span>
            <span style={spanStyle} > <span style={subSpan}>City: </span> {details.city}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Address: </span> {details.address}</span>
            <span style={spanStyle} > <span style={subSpan}>Postal Code: </span> {details.postal_address}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Receptio Date: </span> {details.reception_date}</span>
            <span style={spanStyle} > <span style={subSpan}>Collection Time: </span> {details.collection_time}</span>
            <span style={spanStyle} > <span style={subSpan}>Collection Date: </span> {details.collection_date}</span>
          </div>


          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Specimen Type: </span>  {details.specimen_type}  </span>
            <span style={spanStyle} > <span style={subSpan}>Specimen Orgin: </span> {details.specimen_origin} </span>
            <span style={spanStyle} > <span style={subSpan}>Rejected: </span> {details.is_specimen_rejected} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Panel Code: </span>  {details.panel_code} </span>
            <span style={spanStyle} > <span style={subSpan}>Panel Name: </span> {details.panel_name} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Test Performed By: </span> {details.test_performed_by} </span>
            <span style={spanStyle} > <span style={subSpan}>Clinic Name: </span> {details.clinic_name} </span>
            <span style={spanStyle} > <span style={subSpan}>Doctor Name: </span> {details.doctor_name} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Concerned Issue: </span> {details.concerned_issues} </span>
            <span style={spanStyle} > <span style={subSpan}>Emotional Problems: </span> {details.emotiona_problem} </span>
            <span style={spanStyle} > <span style={subSpan}>Sleep Quality: </span> {details.s_quality} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Project Code: </span> {details.project_code } </span>
            <span style={spanStyle} > <span style={subSpan}>Project Name: </span> {details.project_name} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Clinic Trial Code: </span> {details.clinic_trial_code} </span>
            <span style={spanStyle} > <span style={subSpan}>Clinic Trial Time Point: </span> {details.clinic_trial_time_point}</span>
            <span style={spanStyle} > <span style={subSpan}>Extraction Date: </span> {details.extraction_date}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Test Date: </span> {details.test_date}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Free Sample: </span> {details.is_free_sample} </span>
            <span style={spanStyle} > <span style={subSpan}>Tailormade: </span> {details.is_tailormade}</span>
            <span style={spanStyle} > <span style={subSpan}>Report Ready Date: </span> {details.report_ready_date}</span>
            <span style={spanStyle} > <span style={subSpan}>Remarks:</span> {details.remarks} </span>
            <span style={spanStyle} > <span style={subSpan}>Medical History:</span> {details.medical_history} </span>
          </div>
        </div>
      }

    </div>
  );
}

export default CustomerOrder;
