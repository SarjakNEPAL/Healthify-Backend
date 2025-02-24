import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Search, Plus } from 'lucide-react';
import "./DoctorManagement.css";

const DoctorMgmt = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Smith", specialization: "Cardiology" },
    { id: 2, name: "Dr. Johnson", specialization: "Neurology" },
  ]);

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
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
        <div className="header">
          <div className="title">
            <h2>Doctor Management</h2>
            <p>Manage and register doctors in the system</p>
          </div>
          <Link to="/doctor-registration" className="toggle-button">
            <Plus className="icon" size={20} /> Register New Doctor
          </Link>
        </div>

        <div className="list-view">
          <div className="search-bar">
            <input 
              type="text"
              placeholder="Search doctors..." 
              className="search-input"
            />
            <Search className="search-icon" size={20} />
          </div>
          <div className="table-wrapper">
            <DataTable
              columns={doctorColumns}
              data={doctors}
              pagination
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

export default DoctorMgmt;
