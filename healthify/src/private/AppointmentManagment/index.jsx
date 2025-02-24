import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, ChevronLeft } from 'lucide-react';
import DataTable from "react-data-table-component";
import "./AppointmentManagement.css";

const AppointmentRegistration = ({ addAppointment }) => {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Smith", patient: "John Doe", date: "2023-01-01", time: "10:00" },
    { id: 2, doctor: "Dr. Johnson", patient: "Jane Doe", date: "2023-01-02", time: "11:00" },
  ]);

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
  };

  const columns = [
    { name: "Doctor", selector: (row) => row.doctor, sortable: true },
    { name: "Patient", selector: (row) => row.patient, sortable: true },
    { name: "Date", selector: (row) => row.date, sortable: true },
    { name: "Time", selector: (row) => row.time, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => deleteAppointment(row.id)}
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
            <h2>Appointment Management</h2>
            <p>Register and manage appointments in the system</p>
          </div>
          <Link to="/appointment-registration" className="toggle-button">
            <Plus className="icon" size={20} /> Register New Appointment
          </Link>
        </div>

        <div className="list-view">
          <div className="search-bar">
            <input 
              type="text"
              placeholder="Search appointments..." 
              className="search-input"
            />
          </div>
          <div className="table-wrapper">
            <DataTable
              columns={columns}
              data={appointments}
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

export default AppointmentRegistration;
