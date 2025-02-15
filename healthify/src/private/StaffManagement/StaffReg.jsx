import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./StaffManagement.css";

const StaffRegistration = ({ addStaff }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addStaff(data); // Update the staff list
    reset(); // Reset form after submission
    navigate("/staff-management"); // Redirect to staff management page
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
          <Link to="/staff-management">Back</Link>
        </div>
      </nav>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Staff Registration</h3>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-group">
                <label>Staff Name</label>
                <input {...register("name", { required: "Staff name is required" })} type="text" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input {...register("phoneNumber", { required: "Phone number is required" })} type="text" />
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input {...register("branch", { required: "Branch is required" })} type="text" />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">Register Staff</button>
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

export default StaffRegistration;
