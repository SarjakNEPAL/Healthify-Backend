import React from 'react';
import { Link } from 'react-router-dom';
import './StaffDashboard.css';

const StaffDashboard = () => {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <img src="../../../img/logo.png" alt="Healthify" />
        </Link>
        <Link to="/" style={{ color: "aliceblue", textDecoration: "none" }}>
          <h1>Healthify</h1>
        </Link>
        <div id="trans">
          <Link to="/patients">Patients</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/staff">Staff</Link>
        </div>
      </nav>
      <div id="subnav">
        <Link to="/patients">Patients</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/staff">Staff</Link>
      </div>
      <main>
        <div className="dashboard">
          <h2>Staff Dashboard</h2>
          <p>Manage Patients and Appointments</p>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

export default StaffDashboard;
