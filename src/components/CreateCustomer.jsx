import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/create-order.css";
import CustomerTopNav from "./CustomerTopNav";
import Cookies from "universal-cookie";


const cookie = new Cookies()

const CreateCustomer = () => {

  const navigate = useNavigate();


  const initialState = {
    last_name: "",
    first_name: "",
    customer_id: "",
    order_id: "",
    lab_id: "",
    Chinese_name: "",
    id_number: "",
    passport_number: "",
    sex: "M",
    date_of_birth: "",
    email: "",
    phone: "",
    ethnicity: "",
    height: "",
    weight: "",
    city: "",
    country: "",
    postal_address: "",
    postal_code: "",
    reception_date: "",
    collection_date: "",
    collection_time: "",
    specimen_type: "",
    specimen_origin: "",
    is_specimen_rejected: "False",
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
    is_free_sample: "True",
    extraction_date: "",
    test_date: "",
    report_ready_date: "",
    remarks: "",
    status:"PENDING",
    user:"YEUNG PO",
    medical_history: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://${process.env.REACT_APP_ENDPOINT}/create-customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type header
      },
      body: JSON.stringify(formData), // Convert the body to JSON string
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data)
        if (data === 'successful'){
          setTimeout('', 2000)
          navigate('/user/customer/history')
        }
      });
  };


  return (
    <div className="form-container">
      <CustomerTopNav />
      <nav className="nav">
        <Link className="nav-link" to={"/create-customer"}>
          人类标本
        </Link>
        <Link className="nav-link" to={"/create-pet"}>
          宠物标本
        </Link>
      </nav>
      <h2>客户标本</h2>
      <form onSubmit={handleSubmit} className="page-main-table">
        {/* Input fields and labels */}
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
          <label className="label" htmlFor="Chinese_name">
            中文名字:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="Chinese_name"
            id="Chinese_name"
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

        <div>
          <label className="label" htmlFor="test_performed_by">
            检验者:
          </label>
          <input
            onChange={handleChange}
            type="text"
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
            name="clinic_name"
            id="clinic_name"
          />
        </div>

        <div>
          <label className="label" htmlFor="doctor_name">
            医生名字:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="doctor_name"
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
          />
        </div>

        <div>
          <label className="label" htmlFor="emotion_problem">
            情绪问题:
          </label>
          <input
            onChange={handleChange}
            type="text"
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
          <button type="button" onClick={handleSubmit}>
            提交
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomer;
