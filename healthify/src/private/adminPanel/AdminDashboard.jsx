import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Total Hospitals</h3>
          <p>20</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Staff</h3>
          <p>150</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Patients</h3>
          <p>1000</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Appointments</h3>
          <p>500</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
