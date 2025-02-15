import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./DoctorManagement.css";

const DoctorMgmt = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Smith", specialization: "Cardiology" },
    { id: 2, name: "Dr. Johnson", specialization: "Neurology" },
  ]);

  const { register, handleSubmit, reset } = useForm();

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  const addDoctor = (data) => {
    setDoctors([...doctors, { id: doctors.length + 1, ...data }]);
    reset();
  };

  const doctorColumns = [
    { name: "Doctor Name", selector: (row) => row.name, sortable: true },
    { name: "Specialization", selector: (row) => row.specialization },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => deleteDoctor(row.id)}
          className="delete-button"
        >
          Delete
        </button>
      ),
    },
  ];

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
                <Link to="/hospital-dashboard">Back</Link>
              </div>
            </nav>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Add Doctor</h3>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit(addDoctor)} className="form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Doctor Name</label>
                  <input {...register("name", { required: "Doctor name is required" })} type="text" />
                </div>
                <div className="form-group">
                  <label>Specialization</label>
                  <input {...register("specialization", { required: "Specialization is required" })} type="text" />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">Add Doctor</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
          <h2>Doctor Management</h2>
          <DataTable columns={doctorColumns} data={doctors} pagination />
      </div>

      <footer className="footer">
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

export default DoctorMgmt;
