import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import DataTable from "react-data-table-component";
import './StaffManagement.css';

const StaffManagement = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: "Alice Smith", branch: "Cardiology" },
    { id: 2, name: "Bob Johnson", branch: "Neurology" },
  ]);

  const deleteStaff = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
  };

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Branch", selector: (row) => row.branch, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => deleteStaff(row.id)}
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
            <h2>Staff Management</h2>
            <p>Manage and register staff in the system</p>
          </div>
          <Link to="/staff-registration" className="toggle-button">
            <Plus className="icon" size={20} /> Register New Staff
          </Link>
        </div>

        <div className="list-view">
          <div className="search-bar">
            <input 
              type="text"
              placeholder="Search staff..." 
              className="search-input"
            />
          </div>
          <div className="table-wrapper">
            <DataTable
              columns={columns}
              data={staff}
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

export default StaffManagement;
