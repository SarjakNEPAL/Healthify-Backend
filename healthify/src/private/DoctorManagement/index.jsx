import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  User, Search, Plus, Edit2, Trash2, 
  UserCheck, Briefcase, Calendar, ChevronLeft 
} from 'lucide-react';
import DataTable from 'react-data-table-component';
import './DoctorManagement.css';

const DoctorManagement = () => {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'register'
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Jane Smith",
      specialization: "Cardiology",
      phone: "+1 234-567-8901",
      email: "jane.smith@example.com",
      experience: "10 years",
      lastVisit: "2024-02-10"
    }
  ]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setDoctors([...doctors, { ...data, id: doctors.length + 1 }]);
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
      name: 'Specialization',
      selector: row => row.specialization,
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
      name: 'Experience',
      selector: row => row.experience,
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
          <h2>Doctor Management</h2>
          <p>Manage and register doctors in the system</p>
        </div>
        <button 
          className="toggle-button"
          onClick={() => setActiveTab(activeTab === 'list' ? 'register' : 'list')}
        >
          {activeTab === 'list' ? (
            <><Plus className="icon" size={20} /> Register New Doctor</>
          ) : (
            <><Search className="icon" size={20} /> View Doctor List</>
          )}
        </button>
      </div>

      {activeTab === 'register' ? (
        <div className="card">
          <div className="card-header">
            <h3>Doctor Registration Form</h3>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input {...register('name')} type="text" placeholder="Enter doctor's full name" />
                </div>
                <div className="form-group">
                  <label>Specialization</label>
                  <input {...register('specialization')} type="text" placeholder="Enter specialization" />
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
                  <label>Experience</label>
                  <input {...register('experience')} type="text" placeholder="Enter years of experience" />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="back-button" onClick={() => setActiveTab('list')}>
                  <ChevronLeft size={20} /> Back
                </button>
                <button type="submit" className="submit-button">
                  Register Doctor
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
              placeholder="Search doctors..." 
              className="search-input"
            />
            <Search className="search-icon" size={20} />
          </div>
          <div className="table-wrapper">
            <DataTable
              columns={columns}
              data={doctors}
              pagination
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorManagement;
