import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminPanel = () => {
  const [organizations, setOrganizations] = useState([
    { id: 1, name: "Healthify Hospital", email: "contact@healthify.com" },
    { id: 2, name: "Wellness Clinic", email: "info@wellness.com" },
  ]);

  const deleteOrganization = (id) => {
    setOrganizations(organizations.filter((org) => org.id !== id));
  };

  const columns = [
    { name: "Organization Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email },
    {
      name: "Actions",
      cell: (row) => (
        <button onClick={() => deleteOrganization(row.id)} className="delete-btn">Delete</button>
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
          <Link to="#" className="logout-btn">LogOut</Link>
        </div>
      </nav>
        <div className="admin-container">
      <DataTable columns={columns} data={organizations} pagination />
    </div>
    <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>

  );
};

export default AdminPanel;
