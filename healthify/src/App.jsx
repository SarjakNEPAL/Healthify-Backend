import React, { lazy, Suspense } from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './public/Home';

const Register = lazy(() => import('./public/Registration'));
const Login = lazy(() => import('./public/Login'));
const About = lazy(() => import('./public/About'));
const User_Table = lazy(() => import('./private/UserInformation/UserInformation'));
const User_Form = lazy(() => import('./private/UserInformation/AddUser'));


function App() {
    const [tableUserData, setUserTableData] = useState([]);
 
  const handleUserData = (data) => {
    setUserTableData((prevData) => [...prevData, data]);
  };

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                    <Route path="/" element={<Home />} />s
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About /> } />
                    <Route path="/users" element={<User_Table TBLdata={tableUserData}/>} />
                    <Route  path="/users/create" element={<User_Form addUser={handleUserData} /> } />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
