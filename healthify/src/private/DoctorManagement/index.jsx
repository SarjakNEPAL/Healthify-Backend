import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './DoctorManagement.css';

const DoctorManagement = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add doctor registration logic here
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav>
        <Link to="/" className="logo">
          <img src="../../../img/logo.png" alt="Healthify Logo" />
        </Link>
        <Link to="/" className="nav-title">
          <h1>Healthify</h1>
        </Link>
        <div id="trans">
          <Link to="/patients">Patients</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/staff">Staff</Link>
        </div>
      </nav>

      {/* Secondary Navigation (for smaller screens) */}
      <div id="subnav">
        <Link to="/patients">Patients</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/staff">Staff</Link>
      </div>

      {/* Main Content */}
      <div className="management">
        <h2>Manage Doctors</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register('name', { required: true })} />
          <label htmlFor="specialization">Specialization</label>
          <input type="text" id="specialization" {...register('specialization', { required: true })} />
          <button type="submit" className="button">Add Doctor</button>
        </form>
      </div>
    </>
  );
};

export default DoctorManagement;
