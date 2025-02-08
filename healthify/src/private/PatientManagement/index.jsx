import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './PatientManagement.css';

const PatientManagement = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add patient registration logic here
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
        <h2>Manage Patients</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register('name', { required: true })} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register('age', { required: true })} />
          <label htmlFor="gender">Gender</label>
          <select id="gender" {...register('gender', { required: true })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="contact">Contact</label>
          <input type="text" id="contact" {...register('contact', { required: true })} />
          <button type="submit" className="button">Add Patient</button>
        </form>
      </div>
    </>
  );
};

export default PatientManagement;
