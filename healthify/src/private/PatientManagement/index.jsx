import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Search, Plus, Edit2, Trash2, 
  Phone, Mail, Calendar, ChevronLeft, MapPin 
} from 'lucide-react';
import DataTable from 'react-data-table-component';
import './PatientManagement.css';

const PatientManagement = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "+1 234-567-8900",
      email: "john.doe@example.com",
      disease: "Hypertension",
      address: "123 Main St, Cityville"
    }
  ]);

  const deletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Contact',
      cell: row => (
        <div className="contact-info">
          <div className="phone-info">
            <Phone className="info-icon" size={16} />
            {row.phone}
          </div>
        </div>
      ),
    },
    {
      name: 'Disease',
      selector: row => row.disease,
      sortable: true,
    },
    {
      name: 'Address',
      cell: row => (
        <div className="address">
          <MapPin className="address-icon" size={16} />
          {row.address}
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => deletePatient(row.id)}
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
            <h2>Patient Management</h2>
            <p>Manage and register patients in the system</p>
          </div>
          <Link to="/patient-registration" className="toggle-button">
            <Plus className="icon" size={20} /> Register New Patient
          </Link>
        </div>

        <div className="list-view">
          <div className="search-bar">
            <input 
              type="text"
              placeholder="Search patients..." 
              className="search-input"
            />
            <Search className="search-icon" size={20} />
          </div>
          <div className="table-wrapper">
            <DataTable
              columns={columns}
              data={patients}
              pagination
            />
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </>
  );
};

export default PatientManagement;
