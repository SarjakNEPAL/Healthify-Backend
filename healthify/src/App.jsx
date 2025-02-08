import React, { lazy, Suspense } from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./public/Home/index"

const Register = lazy(() => import('./public/HospitalRegistration/index'));
const Login = lazy(() => import('./public/Login/index'));
const About = lazy(() => import('./public/About/index'));
// const User_Table = lazy(() => import('./private/UserInformation/UserInformation/index'));
// const User_Form = lazy(() => import('./private/UserInformation/AddUser/index'));
const AdminPanel = lazy(() => import('./private/adminPanel/AdminDashboard'));
const HospitalDashboard = lazy(() => import('./private/HospitalDashboard/index'));
const StaffDashboard = lazy(() => import('./private/StaffDashboard/index'));
const PatientManagement = lazy(() => import('./private/PatientManagement/index'));
const StaffManagement = lazy(() => import('./private/StaffManagement/index'));
const AppointmentManagement = lazy(() => import('./private/AppointmentManagment/index'));
const DoctorManagement = lazy(() => import('./private/DoctorManagement/index'));

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
          <Route path="/admin" element={<AdminPanel />} />
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
