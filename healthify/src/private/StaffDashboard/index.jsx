import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./staffDashboard.css";

const staffDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
    <nav>
        <Link to="/staff-dashboard" className="logo">
          <img src="./src/img/logo.png" alt="Healthify" />
        </Link>
        <Link to="/staff-dashboard" style={{ color: "aliceblue", textDecoration: "none" }}>
          <h1>Healthify</h1>
        </Link>
        <div id="trans">
          <Link to="/login">LogOut</Link>
        </div>
      </nav>
      <main>
        <div id="boxcontent">
          <div className="header-content">
            <h1>Healthify staff Dashboard</h1>
            <div className="header-buttons">
            <button onClick={() => navigate("/patients")} className="button">Register Patient</button>
        <button onClick={() => navigate("/appointments")} className="button">Book Appointment</button>
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

export default staffDashboard;
