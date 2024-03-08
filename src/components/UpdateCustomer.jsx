import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../styles/create-order.css";
import CustomerTopNav from "./CustomerTopNav";
import Cookies from 'universal-cookie';


const cookie = new Cookies()
const UpdateCustomer = (props) => {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()


  useEffect(()=>{
    const info = cookie.get('customer-info')
    setFormData(info)
  },[])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdate = ()=> {
    console.log(formData)
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/update-customer/${formData.order_id}`,{
      method : "PUT",
      body : JSON.stringify(formData),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.text())
    .then(data =>{
      console.log(data)
        alert(data)
        setTimeout('', 2000)
        navigate(-1)
        
    })
  }


  return (
    <div className="form-container">
      <CustomerTopNav />

      <h2>更新客户订单信息</h2>
      <form className="page-main-table">
        <div>
          <label htmlFor="last_name">姓氏:</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_name">名字:</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label" htmlFor="customer_id">
            客户编号:
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="customer_id"
            value = {formData.customer_id}
            id="customer_id"
          />
        </div>

        <div>
          <label className="label" htmlFor="order_id">
            订单编号:
          </label>
          <input
            onChange={handleChange}
            type="number"
            value = {formData.order_id}
            name="order_id"
            id="order_id"
          />
        </div>

        <div>
          <label className="label" htmlFor="lab_id">
            实验室编号:
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="lab_id"
            id="lab_id"
            value = {formData.lab_id}
          />
        </div>

        <div>
          <label className="label" htmlFor="Chinese_name">
            中文名字:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="Chinese_name"
            id="Chinese_name"
            value = {formData.Chinese_name}
          />
        </div>

        <div>
          <label className="label" htmlFor="id_number">
            编号:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="id_number"
            id="id_number"
            value={formData.id_number}
          />
        </div>

        <div>
          <label className="label" htmlFor="passport_number">
            证件号码:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="passport_number"
            id="passport_number"
            value = {formData.passport_number}
          />
        </div>

        <div className="pad-div">
          <label>性别:</label>
          <input
            type="radio"
            name="sex"
            value="M"
            checked={formData.sex === "M"}
            onChange={handleChange}
          />{" "}
          男
          <input
            type="radio"
            name="sex"
            value="F"
            checked={formData.sex === "F"}
            onChange={handleChange}
          />{" "}
          女
        </div>

        <div>
          <label className="label" htmlFor="date_of_birth">
            生日:
          </label>
          <input
            onChange={handleChange}
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={formData.date_of_birth}
          />
        </div>

        <div className="pad-div">
          <label htmlFor="is_tailormade">是否为定制: </label>
          <input
            id="is_tailormade"
            name="is_tailormade"
            type="radio"
            value="True"
            checked={formData.is_tailormade === "True"}
            onChange={handleChange}
          />{" "}
          是
          <input
            id="is_tailormade"
            name="is_tailormade"
            type="radio"
            value="False"
            checked={formData.is_tailormade === "False"}
            onChange={handleChange}
          />{" "}
          否
        </div>

        <div className="pad-div">
          <label htmlFor="is_free_sample">是否为免费样本:</label>
          <input
            id="is_free_sample"
            name="is_free_sample"
            type="radio"
            value="True"
            checked={formData.is_free_sample === "True"}
            onChange={handleChange}
          />{" "}
          是
          <input
            id="is_free_sample"
            name="is_free_sample"
            type="radio"
            value="False"
            checked={formData.is_free_sample === "False"}
            onChange={handleChange}
          />{" "}
          否
        </div>

        <div className="pad-div">
          <label htmlFor="is_specimen_rejected">是否已拒绝:</label>
          <input
            id="is_specimen_rejected"
            name="is_specimen_rejected"
            type="radio"
            value="True"
            checked={formData.is_specimen_rejected === "True"}
            onChange={handleChange}
          />{" "}
          是
          <input
            id="is_specimen_rejected"
            name="is_specimen_rejected"
            type="radio"
            value="False"
            checked={formData.is_specimen_rejected === "False"}
            onChange={handleChange}
          />{" "}
          否
        </div>


        <div>
          <label className="label" htmlFor="test_performed_by">
            检验者:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value = {formData.test_performed_by}
            name="test_performed_by"
            id="test_performed_by"
          />
        </div>

        <div>
          <label className="label" htmlFor="clinic_name">
            诊所名称:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value = {formData.clinic_name}
            name="clinic_name"
            id="clinic_name"
          />
        </div>

        <div>
          <label className="label" htmlFor="doctor_name">
            医生姓名:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="doctor_name"
            value={formData.doctor_name}
            id="doctor_name"
          />
        </div>

        <div>
          <label className="label" htmlFor="concerned_issues">
            涉及问题:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.concerned_issues}
            name="concerned_issues"
            id="concerned_issues"
          />
        </div>

        <div>
          <label className="label" htmlFor="s_quality">
            S质量:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="s_quality"
            id="s_quality"
            value = {formData.s_quality}
          />
        </div>

        <div>
          <label className="label" htmlFor="emotion_problem">
            情绪问题:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.emotion_problem}
            name="emotion_problem"
            id="emotion_problem"
          />
        </div>

        <div>
          <label className="label" htmlFor="project_code">
            项目代码:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.project_code}
            name="project_code"
            id="project_code"
          />
        </div>

        <div>
          <label className="label" htmlFor="project_name">
            项目名称:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.project_name}
            name="project_name"
            id="project_name"
          />
        </div>

        <div>
          <label className="label" htmlFor="clinic_trial_code">
            临床试验代码:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.clinic_trial_code}
            name="clinic_trial_code"
            id="clinic_trial_code"
          />
        </div>

        <div>
          <label className="label" htmlFor="clinic_trial_time_point">
            临床试验时间点:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.clinic_trial_time_point}
            name="clinic_trial_time_point"
            id="clinic_trial_time_point"
          />
        </div>

        <div>
          <label className="label" htmlFor="extraction_date">
            采样日期:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.extraction_date}
            name="extraction_date"
            id="extraction_date"
          />
        </div>

        <div>
          <label className="label" htmlFor="test_date">
            检验日期:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.test_date}
            name="test_date"
            id="test_date"
          />
        </div>

        <div>
          <label className="label" htmlFor="report_ready_date">
            报告完成日期:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.report_ready_date}
            name="report_ready_date"
            id="report_ready_date"
          />
        </div>

        <div>
          <label className="label" htmlFor="remarks">
            备注:
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={formData.remarks}
            name="remarks"
            id="remarks"
          />
        </div>

        <div>
          <label htmlFor="medical_history">医疗历史:</label>
          <textarea
            id="medical_history"
            name="medical_history"
            value={formData.medical_history}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleUpdate}>
            提交
          </button>
        </div>
      </form>
    </div>

  )
}

export default UpdateCustomer;
