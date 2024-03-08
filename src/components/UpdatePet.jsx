import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../styles/create-order.css";
import CustomerTopNav from "./CustomerTopNav";
import Cookies from 'universal-cookie';


const cookie = new Cookies()
const UpdatePet = (props) => {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    const info = cookie.get('pet-info')
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
    fetch(`https://${process.env.REACT_APP_ENDPOINT}/update-pet/${formData.order_id}`,{
      method : "PUT",
      body : JSON.stringify(formData),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
      .then(res => res.text())
      .then(data =>{
        alert(data)
        setTimeout('', 2000)
        navigate(-1)
      })
  }


  return (
    <div className="form-container">
      <CustomerTopNav />
      <h2>更新宠物订单信息</h2>
      <form className="page-main-table">

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


        <div className="pad-div">
          <label>性别:</label>
          <input
            type="radio"
            name="pet_sex"
            value="M"
            checked={formData.pet_sex === "M"}
            onChange={handleChange}
          />{" "}
          雄性
          <input
            type="radio"
            name="pet_sex"
            value="F"
            checked={formData.pet_sex === "F"}
            onChange={handleChange}
          />{" "}
          雌性
        </div>

        <div>
          <label htmlFor="pet_name" class="label">
            宠物名称:
          </label>
          <input
            type="text"
            name="pet_name"
            id="pet_name"
            value={formData.pet_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="animal_type" class="label">
            动物种类:
          </label>
          <input
            type="text"
            name="animal_type"
            id="animal_type"
            value={formData.animal_type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="breed" class="label">
            血统:
          </label>
          <input 
            type="text" 
            name="breed" 
            id="breed"
            value={formData.breed}
            onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="neutered_status" class="label">
            绝育状态:
          </label>
          <input
            type="text"
            name="neutered_status"
            id="neutered_status"
            value={formData.neutered_status}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="owner_surname" class="label">
            主人姓氏:
          </label>
          <input
            type="text"
            name="owner_surname"
            id="owner_surname"
            value={formData.owner_surname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="owner_given_name" class="label">
            主人名字:
          </label>
          <input
            type="text"
            name="owner_given_name"
            id="owner_given_name"
            value={formData.owner_given_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" class="label">
            电子邮件:
          </label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="phone" class="label">
            电话:
          </label>
          <input 
            type="tel" 
            name="phone" 
            id="phone"
            value={formData.phone}
            onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="address" class="label">
            地址:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="postal_code">
            邮政编码:
          </label>
          <input
            type="number"
            name="postal_code"
            id="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
          />
        </div>



        <div className="pad-div">
          <label htmlFor="is_tailormade">是否为定制样本: </label>
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
          <label class="label" htmlFor="reception_date">
            接受日期
          </label>
          <input
            type="text"
            name="reception_date"
            id="reception_date"
            value={formData.reception_date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="collection_date">
            收集日期
          </label>
          <input
            type="text"
            name="collection_date"
            id="collection_date"
            value={formData.collection_date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="collection_time">
            收集时间:
          </label>
          <input
            type="text"
            name="collection_time"
            id="collection_time"
            value={formData.collection_time}
            onChange={handleChange}
          />
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
            睡眠质量:
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

export default UpdatePet;
