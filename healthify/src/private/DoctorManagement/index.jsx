import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminPanel = () => {
  const [organizations, setOrganizations] = useState([
    { id: 1, name: "Healthify Hospital", email: "contact@healthify.com" },
    { id: 2, name: "Wellness Clinic", email: "info@wellness.com" },
  ]);

  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Smith", specialization: "Cardiology" },
    { id: 2, name: "Dr. Johnson", specialization: "Neurology" },
  ]);

  const [newDoctor, setNewDoctor] = useState({ name: "", specialization: "" });

  const deleteOrganization = (id) => {
    setOrganizations(organizations.filter((org) => org.id !== id));
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  const addDoctor = () => {
    if (newDoctor.name && newDoctor.specialization) {
      setDoctors([...doctors, { id: doctors.length + 1, ...newDoctor }]);
      setNewDoctor({ name: "", specialization: "" });
    }
  };

  const organizationColumns = [
    { name: "Organization Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email },
    {
      name: "Actions",
      cell: (row) => (
        <button onClick={() => deleteOrganization(row.id)} className="delete-btn">Delete</button>
      ),
    },
  ];

  const doctorColumns = [
    { name: "Doctor Name", selector: (row) => row.name, sortable: true },
    { name: "Specialization", selector: (row) => row.specialization },
    {
      name: "Actions",
      cell: (row) => (
        <button onClick={() => deleteDoctor(row.id)} className="delete-btn">Delete</button>
      ),
    },
  ];

  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <img src="..\src\img\logo.png" alt="Healthify" />
        </Link>
        <Link to="/" style={{ color: "aliceblue", textDecoration: "none" }}>
          <h1>Healthify | Admin</h1>
        </Link>
        <div id="trans">
          <Link to="/change-password" className="change-password-btn">Change Password</Link>
        </div>
      </nav>
      <div className="admin-container">
        <h2>Organizations</h2>
        <DataTable columns={organizationColumns} data={organizations} pagination />

        <h2>Doctor Management</h2>
        <div className="doctor-form">
          <input
            type="text"
            placeholder="Doctor Name"
            value={newDoctor.name}
            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Specialization"
            value={newDoctor.specialization}
            onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
          />
          <button onClick={addDoctor} className="add-btn">Add Doctor</button>
        </div>
        <DataTable columns={doctorColumns} data={doctors} pagination />
      </div>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password changed successfully!");
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={handleChange} placeholder="New Password" required />
        <button type="submit">Update Password</button>
      </form>
      <Link to="/admin">Back to Admin Panel</Link>
    </div>
  );
};

export default AdminPanel;
