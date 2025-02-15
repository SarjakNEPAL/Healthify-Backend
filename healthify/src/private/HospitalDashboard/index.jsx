import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./HospitalDashboard.css";

const HospitalDashboard = () => {
  const navigate = useNavigate();

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
          <Link to="/login">LogOut</Link>
        </div>
      </nav>
      <main>
        <div id="boxcontent">
          <div className="header-content">
            <h1>Healthify Hospital Dashboard</h1>
            <div className="header-buttons">
            <button onClick={() => navigate("/patients")} className="button">Patient Details</button>
        <button onClick={() => navigate("/doctors")} className="button">Doctor Details</button>
        <button onClick={() => navigate("/appointments")} className="button">Appointments</button>
        <button onClick={() => navigate("/change-password")} className="button">Change Password</button>
            </div>
          </div>
          <div id="image">
            <img src="../src/img/doctor3.jpg" alt="Healthify" />
          </div>
        </div>
      </main>
    <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
      </>
  );
};

export default HospitalDashboard;
