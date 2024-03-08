import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'  

const cookie = new Cookies()
export const PetOrder = (props) => {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()


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
  
  const handleUpdate = ()=>{
    cookie.set('pet-info', JSON.stringify(details))
    navigate('/update-pet')
  }


  return (
    <div style={motherContainer}>

      <div style={topContainer} >

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
            <span  style={{backgroundColor: "lightyellow", borderRadius: "5px", width:"100px"}}>Status :</span>
            <span>{details.status}</span>
          </div>

          <div style={leftSubContainer}>
            <span  style={{backgroundColor: "lightsteelblue", borderRadius: "5px", width:"100px"}}>User : </span>
            <span>{ details.user} </span>
          </div>

        </div>

        <div style={rightContainer}>
          <button onClick={()=>{setShow(!show) }} style={expandCollapseButton}>{show?"Collapse" : "Expand"}</button>
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
            <span style={spanStyle}>  <span style={subSpan}>宠物名称: </span> {details.pet_name} </span>
            <span style={spanStyle}>  <span style={subSpan}>宠物性别: </span> {details.pet_sex}</span>
            <span style={spanStyle}>  <span style={subSpan}>生日: </span> {details.date_of_birth}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle}>  <span style={subSpan}>动物种类: </span> {details.animal_type} </span>
            <span style={spanStyle}>  <span style={subSpan}>血统: </span> {details.breed}</span>
            <span style={spanStyle} > <span style={subSpan}>绝育状态: </span> {details.neutere_status}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>电子邮件: </span> {details.email}</span>
            <span style={spanStyle} > <span style={subSpan}>电话: </span> {details.phone}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>主人姓氏: </span>{details.owner_surname}</span>
            <span style={spanStyle} > <span style={subSpan}>主人名字: </span>{details.owner_given_name}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>地址: </span> {details.address}</span>
            <span style={spanStyle} > <span style={subSpan}>邮政编码: </span> {details.postal_address}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>Receptio Date:(To be removed) </span> {details.reception_date}</span>
            <span style={spanStyle} > <span style={subSpan}>Collection Time:(To be removed) </span> {details.collection_time}</span>
            <span style={spanStyle} > <span style={subSpan}>收样日期: </span> {details.collection_date}</span>
          </div>


          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>标本类型: </span>  {details.specimen_type}  </span>
            <span style={spanStyle} > <span style={subSpan}>标本来源: </span> {details.specimen_origin} </span>
            <span style={spanStyle} > <span style={subSpan}>是否已拒绝: </span> {details.is_specimen_rejected} </span>
            <span style={spanStyle} > <span style={subSpan}>上个编号: </span> {details.previous_id} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>面板代码: </span>  {details.panel_code} </span>
            <span style={spanStyle} > <span style={subSpan}>面板名称: </span> {details.panel_name} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>检验者: </span> {details.test_performed_by} </span>
            <span style={spanStyle} > <span style={subSpan}>诊所名称: </span> {details.clinic_name} </span>
            <span style={spanStyle} > <span style={subSpan}>医生名字: </span> {details.doctor_name} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>涉及问题: </span> {details.concerned_issues} </span>
            <span style={spanStyle} > <span style={subSpan}>情绪问题: </span> {details.emotiona_problem} </span>
            <span style={spanStyle} > <span style={subSpan}>睡眠质量: </span> {details.s_quality} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>项目代码: </span> {details.project_code } </span>
            <span style={spanStyle} > <span style={subSpan}>项目名称: </span> {details.project_name} </span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>临床试验代码: </span> {details.clinic_trial_code} </span>
            <span style={spanStyle} > <span style={subSpan}>临床试验时间点: </span> {details.clinic_trial_time_point}</span>
            <span style={spanStyle} > <span style={subSpan}>提取日期: </span> {details.extraction_date}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>检验日期: </span> {details.test_date}</span>
          </div>

          <div style={subStyle}>
            <span style={spanStyle} > <span style={subSpan}>是否为免费样本: </span> {details.is_free_sample} </span>
            <span style={spanStyle} > <span style={subSpan}>是否为定制: </span> {details.is_tailormade}</span>
            <span style={spanStyle} > <span style={subSpan}>报告完成日期: </span> {details.report_ready_date}</span>
            <span style={spanStyle} > <span style={subSpan}>备注:</span> {details.remarks} </span>
            <span style={spanStyle} > <span style={subSpan}>Medical History:</span> {details.medical_history} </span>

          </div>
        </div>
      }

    </div>
  )
}
