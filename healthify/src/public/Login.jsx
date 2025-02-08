import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import '../css/style.css'; // Ensure your stylesheet is included
import * as yup from "yup";
import { Link } from 'react-router-dom';


const Login = () => {

    const schema = yup.object().shape({
        email: yup
          .string()
          .email("Invalid email format")
          .required("Email is required"),
        password: yup
          .string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });
        const{
        register, // binding the form to use from
        handleSubmit, //submit bhakoo kura handle
        formState: {errors} // fork ko state k cha bhannae hercha
    } = useForm({resolver:yupResolver(schema)});


    const onSubmit = (data) => {
        console.log("Logging in with:", data);
 
    axios
      .post(`${API.BASE_URL}/api/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Log the entire response to inspect the structure
        console.log("Login Response:", response.data.data.access_token);
 
        // Check if access_token exists inside response.data
        if (response.data && response.data.data.access_token) {
          console.log("Access Token:", response.data.data.access_token);
          localStorage.setItem("token", response.data.data.access_token); // ✅ Store Token
          navigate("/dashboard"); // ✅ Redirect to Dashboard
        } else {
          alert("Login failed! Check credentials.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Error logging in. Please try again.");
      });
 
    reset();
    };
    
    return(
    <>
        <nav>
            <Link to="/" className="logo"><img src="src/img/logo.png" alt="Healthify" /></Link>
            <Link to="/" style={{ color: "aliceblue", textDecoration: "none" }}><h1>Healthify</h1></Link>
            <div id="trans">
                <Link to="/register">Register</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
        <div id="subnav">
            <Link to="/register">Register</Link>
            <Link to="/about">About</Link>
        </div>
        <main>
            <div id="login">
                <form id="entry" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <input
                    placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email',
                        },
                    })}                    
                />
                {errors.email && <p style={{color:"red"}}>{errors.name.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                    placeholder="password"
                    {...register('password', {
                        required: 'Password is required',
                    })}                    
                />
                    <div id="submitt" style={{ display: 'flex', alignItems: 'center' }}>
                        <input className="button" type="submit" value="Sign In" />
                        <p style={{ fontSize: '0.8rem' }}>New To Healthify? <Link to="/register" style={{ fontSize: '0.8rem' }}>Sign Up</Link></p>
                    </div>
                </form>
                <img src="src/img/doctor.jpg" alt="doctor" />
            </div>
        </main>
        <footer>
            <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
        </footer>
    </>
)};

export default Login