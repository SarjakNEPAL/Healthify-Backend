import React from 'react';
import { Link } from 'react-router-dom';
import './HospitalDashboard.css';

const HospitalDashboard = () => {
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
          <h2>Hospital Dashboard</h2>
          <p>Total Staff: 10</p>
          <p>Total Patients: 50</p>
          <p>Total Appointments: 20</p>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

export default HospitalDashboard;
