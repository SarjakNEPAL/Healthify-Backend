import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  User, Search, Plus, Edit2, Trash2, 
  Phone, Mail, Calendar, ChevronLeft 
} from 'lucide-react';
import DataTable from 'react-data-table-component';
import './PatientManagement.css';

const PatientManagement = () => {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'register'
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      phone: "+1 234-567-8900",
      email: "john.doe@example.com",
      condition: "Hypertension",
      lastVisit: "2024-02-10"
    }
  ]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setPatients([...patients, { ...data, id: patients.length + 1 }]);
    setActiveTab('list');
    reset();
  };

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: row => row.gender,
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
          <div className="email-info">
            <Mail className="info-icon" size={16} />
            {row.email}
          </div>
        </div>
      ),
    },
    {
      name: 'Condition',
      selector: row => row.condition,
      sortable: true,
    },
    {
      name: 'Last Visit',
      cell: row => (
        <div className="visit-info">
          <Calendar className="info-icon" size={16} />
          {row.lastVisit}
        </div>
      ),
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="actions">
          <button className="action-button">
            <Edit2 className="action-icon" size={16} />
          </button>
          <button className="action-button">
            <Trash2 className="action-icon" size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h2>Patient Management</h2>
          <p>Manage and register patients in the system</p>
        </div>
        <button 
          className="toggle-button"
          onClick={() => setActiveTab(activeTab === 'list' ? 'register' : 'list')}
        >
          {activeTab === 'list' ? (
            <><Plus className="icon" size={20} /> Register New Patient</>
          ) : (
            <><Search className="icon" size={20} /> View Patient List</>
          )}
        </button>
      </div>

      {activeTab === 'register' ? (
        <div className="card">
          <div className="card-header">
            <h3>Patient Registration Form</h3>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input {...register('name')} type="text" placeholder="Enter patient's full name" />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input {...register('age')} type="number" placeholder="Age" />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select {...register('gender')}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input {...register('phone')} type="tel" placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input {...register('email')} type="email" placeholder="Enter email address" />
                </div>
                <div className="form-group">
                  <label>Medical Condition</label>
                  <input {...register('condition')} type="text" placeholder="Enter primary medical condition" />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="back-button" onClick={() => setActiveTab('list')}>
                  <ChevronLeft size={20} /> Back
                </button>
                <button type="submit" className="submit-button">
                  Register Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default PatientManagement;
