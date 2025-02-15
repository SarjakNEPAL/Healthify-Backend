import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./AppointmentRegistration.css";

const AppointmentRegistration = ({ addAppointment }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addAppointment(data); // Update the appointment list
    reset(); // Reset form after submission
    navigate("/appointment-management"); // Redirect to appointment management page
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
          <Link to="/appointment-management">Back</Link>
        </div>
      </nav>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Appointment Registration</h3>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-group">
                <label>Doctor</label>
                <input {...register("doctor", { required: "Doctor is required" })} type="text" />
              </div>
              <div className="form-group">
                <label>Patient</label>
                <input {...register("patient", { required: "Patient is required" })} type="text" />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input {...register("date", { required: "Date is required" })} type="date" />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input {...register("time", { required: "Time is required" })} type="time" />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">Register Appointment</button>
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

export default AppointmentRegistration;
