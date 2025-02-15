import React, { lazy, Suspense } from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./public/Home/index"

const Register = lazy(() => import('./public/HospitalRegistration/index'));
const Login = lazy(() => import('./public/Login/index'));
const About = lazy(() => import('./public/About/index'));
const AdminPanel = lazy(() => import('./private/adminPanel/AdminDashboard'));
const HospitalDashboard = lazy(() => import('./private/HospitalDashboard/index'));
const PatientManagement = lazy(() => import('./private/PatientManagement/index'));
const StaffManagement = lazy(() => import('./private/StaffManagement/index'));
const AppointmentManagement = lazy(() => import('./private/AppointmentManagment/index'));
const DoctorManagement = lazy(() => import('./private/DoctorManagement/index'));

function App() {
  const [doctors, setDoctors] = useState([]);
  const [staff, setStaff] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addDoctor = (doctor) => setDoctors([...doctors, doctor]);
  const addStaff = (staffMember) => setStaff([...staff, staffMember]);
  const addPatient = (patient) => setPatients([...patients, patient]);
  const addAppointment = (appointment) => setAppointments([...appointments, appointment]);

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
        <Route
          path="/doctor-management"
          element={<DoctorManagement doctors={doctors} />}
        />
        <Route
          path="/staff-management"
          element={<StaffManagement staff={staff} />}
        />
        <Route
          path="/patient-management"
          element={<PatientManagement patients={patients} />}
        />
        <Route
          path="/appointment-management"
          element={<AppointmentManagement appointments={appointments} />}
        />
        <Route
          path="/doctor-registration"
          element={<DoctorRegistration addDoctor={addDoctor} />}
        />
        <Route
          path="/staff-registration"
          element={<StaffRegistration addStaff={addStaff} />}
        />
        <Route
          path="/patient-registration"
          element={<PatientRegistration addPatient={addPatient} />}
        />
        <Route
          path="/appointment-registration"
          element={<AppointmentRegistration addAppointment={addAppointment} />}
        />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
