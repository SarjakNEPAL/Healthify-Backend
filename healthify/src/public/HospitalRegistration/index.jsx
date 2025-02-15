import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import './HospitalRegistration.css';

const HospitalRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Registration Successful!");
  };

  return (
    <Fragment>
      <nav>
        <Link to="/" className="logo">
          <img src="./src/img/logo.png" alt="Healthify" />
        </Link>
        <Link to="/" style={{ color: "aliceblue", textDecoration: "none" }}>
          <h1>Healthify</h1>
        </Link>
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
          <div id="reg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                id="organization"
                {...register('organization', { required: "Organization name is required" })}
              />
              {errors.organization && <p className="error">{errors.organization.message}</p>}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                {...register('address', { required: "Address is required" })}
              />
              {errors.address && <p className="error">{errors.address.message}</p>}

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', { required: "Confirm Password is required" })}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

              <button type="submit" className="button">Register</button>
            </form>
          </div>
          <div id="inside">
            <h1>Register</h1>
            <img src="./src/img/regImg.png" alt="Hospital Pic" /><br />
            <Link to="/login" style={{ fontSize: '1rem' }}>Already Registered? Sign In</Link>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </Fragment>
  );
};

export default HospitalRegistration;
