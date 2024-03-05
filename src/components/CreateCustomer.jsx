import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/create-order.css";

const CreateCustomer = () => {
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
    fetch("http://localhost:5050/create-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type header
      },
      body: JSON.stringify(formData), // Convert the body to JSON string
    })
      .then((res) => res.text())
      .then((data) => alert(data));
  };

  return (
    <div className="form-container">
      <nav className="nav">
        <Link className="nav-link" to={"/create-customer"}>
          Human Specimen
        </Link>
        <Link className="nav-link" to={"/create-pet"}>
          Pet Specimen
        </Link>
      </nav>
      <h2>Customer Specimen</h2>
      <form className="page-main-table">
        {/* Input fields and labels */}
        <div>
          <label htmlFor="last_name">LAST NAME:</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_name">FIRST NAME:</label>
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
            CUSTOMER ID:
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
            order_id:
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
            Lab ID:
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
            CHINESE NAME:
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
            ID NUMBER:
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
            PASSPORT NUMBER:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="passport_number"
            id="passport_number"
          />
        </div>

        <div className="pad-div">
          <label>SEX:</label>
          <input
            type="radio"
            name="sex"
            value="M"
            checked={formData.sex === "M"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="sex"
            value="F"
            checked={formData.sex === "F"}
            onChange={handleChange}
          />{" "}
          Female
        </div>

        <div>
          <label className="label" htmlFor="date_of_birth">
            Date of Birth:
          </label>
          <input
            onChange={handleChange}
            type="date"
            name="date_of_birth"
            id="date_of_birth"
          />
        </div>

        <div className="pad-div">
          <label htmlFor="is_tailormade">Is Tailormade: </label>
          <input
            id="is_tailormade"
            name="is_tailormade"
            type="radio"
            value="True"
            checked={formData.is_tailormade === "True"}
            onChange={handleChange}
          />{" "}
          Yes
          <input
            id="is_tailormade"
            name="is_tailormade"
            type="radio"
            value="False"
            checked={formData.is_tailormade === "False"}
            onChange={handleChange}
          />{" "}
          No
        </div>

        <div className="pad-div">
          <label htmlFor="is_free_sample">Is Free Sample:</label>
          <input
            id="is_free_sample"
            name="is_free_sample"
            type="radio"
            value="True"
            checked={formData.is_free_sample === "True"}
            onChange={handleChange}
          />{" "}
          Yes
          <input
            id="is_free_sample"
            name="is_free_sample"
            type="radio"
            value="False"
            checked={formData.is_free_sample === "False"}
            onChange={handleChange}
          />{" "}
          No
        </div>

        <div>
          <label className="label" htmlFor="test_performed_by">
            Test Performed By:
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
            Clinic Name:
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
            Doctor Name:
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
            Concerned Issues:
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
            S Quality:
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
            Emotion Problem:
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
            Project Code:
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
            Project Name:
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
            Clinic Trial Code:
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
            Clinic Trial Time Point:
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
            Extraction Date:
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
            Test Date:
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
            Report Ready Date:
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
            Remarks:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="remarks"
            id="remarks"
          />
        </div>

        <div>
          <label htmlFor="medical_history">MEDICAL HISTORY:</label>
          <textarea
            id="medical_history"
            name="medical_history"
            value={formData.medical_history}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomer;