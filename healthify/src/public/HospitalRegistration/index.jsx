import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import './HospitalRegistration.css';

const HospitalRegistration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add registration logic here
  };

  return (
    <Fragment>
      <nav>
        <Link to="/" className="logo">
          <img src="../../../img/logo.png" alt="Healthify" />
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
              <input type="text" id="organization" {...register('organization', { required: true })} />
              <label htmlFor="registrationNumber">Registration Number</label>
              <input type="text" id="registrationNumber" {...register('registrationNumber', { required: true })} />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" {...register('address', { required: true })} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register('password', { required: true })} />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" {...register('confirmPassword', { required: true })} />
              <button type="submit" className="button">Register</button>
            </form>
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
