import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style2.css';

const Registration = () => {

    return(
    <>
            <nav>
            <Link to="/" className="logo"><img src="src/img/logo.png" alt="Healthify" /></Link>
            <Link to="/" style={{ color: "aliceblue", textDecoration: "none" }}><h1>Healthify</h1></Link>
            <div id="trans">
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
        <div id="subnav">
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </div>
        <main>
            <div id="register">
                <div id="form">
                    <form id="entry">
                        <label htmlFor="username">Organization Name</label>
                        <input type="text" name="username" id="username" required placeholder="Organization Name" maxLength="10" className="input" /><br />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required placeholder="Email" className="input" /><br />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required placeholder="Password" minLength="8" className="input" /><br />
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" name="cpass" id="cpassword" required placeholder="Confirm Password" minLength="8" className="input" /><br />
                        <button type="submit" className="button">Sign Up</button><br />
                    </form>
                </div>
                <div id="inside">
                    <h1>Register</h1>
                    <img src="src/img/regImg.png" alt="Hospital Pic" /><br />
                    <Link to="/login" style={{ fontSize: '1rem' }}>Already Registered? Sign In</Link>
                </div>
            </div>
        </main>
        <footer>
            <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
        </footer>
    </>
)};

export default Registration;
