import React, { lazy, Suspense } from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/public/Home';

const Register = lazy(() => import('./components/public/Registration'));
const Login = lazy(() => import('./components/public/Login'));
const About = lazy(() => import('./components/public/About'));
const User_Table = lazy(() => import('./components/private/UserInformation/UserInformation'));
const User_Form = lazy(() => import('./components/private/UserInformation/AddUser'));
const AdminPanel = lazy(() => import('./components/private/adminPanel/AdminDashboard'));
const HospitalDashboard = lazy(() => import('./components/private/HospitalDashboard'));
const StaffDashboard = lazy(() => import('./components/private/StaffDashboard'));
const PatientManagement = lazy(() => import('./components/private/PatientManagement'));
const StaffManagement = lazy(() => import('./components/private/StaffManagement'));
const AppointmentManagement = lazy(() => import('./components/private/AppointmentManagement'));
const DoctorManagement = lazy(() => import('./components/private/DoctorManagement'));

function App() {
  const [tableUserData, setUserTableData] = useState([]);

  const handleUserData = (data) => {
    setUserTableData((prevData) => [...prevData, data]);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<User_Table TBLdata={tableUserData} />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/users/create" element={<User_Form addUser={handleUserData} />} />
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/patients" element={<PatientManagement />} />
          <Route path="/staff" element={<StaffManagement />} />
          <Route path="/appointments" element={<AppointmentManagement />} />
          <Route path="/doctors" element={<DoctorManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
