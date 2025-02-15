import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./PatientRegistration.css";

const PatientRegistration = ({ addPatient }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addPatient(data); // Update the patient list
    reset(); // Reset form after submission
    navigate("/patient-management"); // Redirect to patient management page
  };

  return (
    <>
      <nav>
        <Link to="/hospital-dashboard" className="logo">
          <img src="./src/img/logo.png" alt="Healthify" />
        </Link>
        <Link to="/hospital-dashboard" style={{ color: "aliceblue", textDecoration: "none" }}>
          <h1>Healthify</h1>
        </Link>
        <div id="trans">
          <Link to="/patient-management">Back</Link>
        </div>
      </nav>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Patient Registration</h3>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-group">
                <label>Patient Name</label>
                <input {...register("name", { required: "Patient name is required" })} type="text" />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input {...register("age", { required: "Age is required" })} type="number" />
              </div>
              <div className="form-group">
                <label>Disease</label>
                <input {...register("disease", { required: "Disease is required" })} type="text" />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">Register Patient</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

export default PatientRegistration;
