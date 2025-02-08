import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add login logic here
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
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email', { required: true })} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password', { required: true })} />
            <button type="submit" className="button">Login</button>
          </form>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </Fragment>
  );
};

export default Login;
