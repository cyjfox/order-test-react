import React, { useState } from "react";
import "../styles/create-order.css";
import { Link } from "react-router-dom";
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
    is_rejected: "False",
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
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5050/create-pet", {
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
          <label>SEX:</label>
          <input
            type="radio"
            name="pet_sex"
            value="M"
            checked={formData.pet_sex === "M"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="pet_sex"
            value="F"
            checked={formData.pet_sex === "F"}
            onChange={handleChange}
          />{" "}
          Female
        </div>

        <div>
          <label htmlFor="pet_name" class="label">
            Pet Name:
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
            Animal Type:
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
            Breed:
          </label>
          <input type="text" name="breed" id="breed" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="neutered_status" class="label">
            Neutered Status:
          </label>
          <input
            type="text"
            name="neutered_status"
            id="neutered_status"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="owner_surname" class="label">
            Owner Surname:
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
            Owner Given Name:
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
            Email:
          </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="phone" class="label">
            Phone:
          </label>
          <input type="tel" name="phone" id="phone" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="address" class="label">
            Address:
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
            POSTAL CODE:
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
            Reception Date
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
            Colection Date
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
            Collection Time:
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
            Specimen Type:
          </label>
          <input
            type="text"
            name="specimen_type"
            id="specimen_type"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="specimen_origin">Specimen Origin:</label>
          <input
            type="text"
            name="specimen_origin"
            id="specimen_origin"
            onChange={handleChange}
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

        <div>
          <label class="label" htmlFor="previous_id">
            Previous ID:
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
            Panel CODE:
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
            Project Name:
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
            Test Performed By:
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
            Clinic Name:
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
            Doctor Name:
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
            Concerned Issues:
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
            S Quality:
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
            Emotion Problem:
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
            Project Code:
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
            Project Name:
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
            Clinic Trial Code:
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
            Clinic Trial Time Point:
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="clinic_trial_time_point"
            id="clinic_trial_time_point"
          />
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
          <label class="label" htmlFor="extraction_date">
            Extraction Date:
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
            Test Date:
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
            Report Ready Date:
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
            Remarks:
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
            MEDICAL HISTORY:
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="medical_history"
            id="medical_history"
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreatePet;
