import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './About.css';

const About = () => {
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
        <div className="about-content">
          <h2>About Healthify</h2>
          <p>
            Healthify is a comprehensive hospital management system that helps you manage your hospital efficiently. From patient registration to appointment booking, staff management to doctor allocation, Healthify has got you covered.
          </p>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </Fragment>
  );
};

export default About;
