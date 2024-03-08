import React, { useState } from "react";
import "../styles/create-order.css";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import CustomerTopNav from "./CustomerTopNav";


const CreatePet = () => {
  const initialState = {
    pet_sex: "M",
    pet_name: "",
    animal_type: "",
    breed: "",
    neutere_status: "",
    owner_surname: "",
    owner_given_name: "",
    email: "",
    phone: "",
    address: "",
    order_id : "",
    lab_id: "",
    postal_code: "",
    reception_date: "",
    collection_date: "",
    collection_time: "",
    specimen_type: "",
    specimen_origin: "",
    previous_id: "",
    panel_code: "",
    project_name: "",
    is_tailormade: "True",
    test_performed_by: "",
    clinic_name: "",
    doctor_name: "",
    concerned_issues: "",
    s_quality: "",
    emotion_problem: "",
    project_code: "",
    clinic_trial_code: "",
    clinic_trial_time_point: "",
    is_free_sample: "False",
    is_specimen_rejected: "False",
    extraction_date: "",
    test_date: "",
    report_ready_date: "",
    remarks: "",
    user: "YEUNG PO",
    status: "PENDING",
    medical_history: "",
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/create-pet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type header
      },
      body: JSON.stringify(formData), // Convert the body to JSON string
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data)
        setTimeout('', 2000)
        navigate('/user/pet/history')
      });
  };

  return (
    <div class="form-container">
      <CustomerTopNav />
      <nav className="nav">
        <Link className="nav-link" to={"/create-customer"}>
          Human Specimen
        </Link>
        <Link className="nav-link" to={"/create-pet"}>
          Pet Specimen
        </Link>
      </nav>

      <h2>Pet Specimen Order</h2>
      <form class="page-main-table">
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
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="breed" class="label">
            血统:
          </label>
          <input type="text" name="breed" id="breed" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="neutered_status" class="label">
            绝育状态:
          </label>
          <input
            type="text"
            name="neutered_status"
            id="neutered_status"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label" htmlFor="order_id">
            订单编号:
          </label>
          <input
            onChange={handleChange}
            type="number"
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
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="reception_date">
            接受日期
          </label>
          <input
            type="text"
            name="reception_date"
            id="reception_date"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="collection_date">
            收样日期:
          </label>
          <input
            type="text"
            name="collection_date"
            id="collection_date"
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
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="specimen_type">
            标本类型:
          </label>
          <input
            type="text"
            name="specimen_type"
            id="specimen_type"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="specimen_origin">标本来源:</label>
          <input
            type="text"
            name="specimen_origin"
            id="specimen_origin"
            onChange={handleChange}
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

        <div>
          <label class="label" htmlFor="previous_id">
            上个编号:
          </label>
          <input
            type="text"
            name="previous_id"
            id="previous_id"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="panel_code">
            面板代码:
          </label>
          <input
            type="text"
            name="panel_code"
            id="panel_code"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="project_name">
            项目名称:
          </label>
          <input
            type="text"
            name="project_name"
            id="project_name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="test_performed_by">
            检验者:
          </label>
          <input
            type="text"
            name="test_perhtmlFormed_by"
            id="test_performed_by"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="clinic_name">
            诊所名称:
          </label>
          <input
            type="text"
            name="clinic_name"
            id="clinic_name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="doctor_name">
            医生姓名:
          </label>
          <input
            type="text"
            name="doctor_name"
            id="doctor_name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="concerned_issues">
            涉及问题:
          </label>
          <input
            type="text"
            name="concerned_issues"
            id="concerned_issues"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="s_quality">
            S质量:
          </label>
          <input
            type="text"
            name="s_quality"
            id="s_quality"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="emotion_problem">
            情绪问题:
          </label>
          <input
            type="text"
            name="emotion_problem"
            id="emotion_problem"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="project_code">
            项目代码:
          </label>
          <input
            type="text"
            name="project_code"
            id="project_code"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="project_name">
            项目名称:
          </label>
          <input
            type="text"
            name="project_name"
            id="project_name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="clinic_trial_code">
            临床试验代码:
          </label>
          <input
            type="text"
            name="clinic_trial_code"
            id="clinic_trial_code"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="clinic_trial_time_point">
            临床试验时间点:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="clinic_trial_time_point"
            id="clinic_trial_time_point"
          />
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

        <div>
          <label class="label" htmlFor="extraction_date">
            提取日期:
          </label>
          <input
            type="number"
            name="extraction_date"
            id="extraction_date"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="test_date">
            检验日期:
          </label>
          <input
            type="text"
            name="test_date"
            id="test_date"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="report_ready_date">
            报告完成日期:
          </label>
          <input
            type="text"
            name="report_ready_date"
            id="report_ready_date"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="remarks">
            备注:
          </label>
          <input
            type="text"
            name="remarks"
            id="remarks"
            onChange={handleChange}
          />
        </div>

        <div>
          <label class="label" htmlFor="medical_history">
            医疗历史:
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="medical_history"
            id="medical_history"
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          提交
        </button>
      </form>
    </div>
  );
};

export default CreatePet;
