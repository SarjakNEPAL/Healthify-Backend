// Dashboard.jsx
import React from "react";
import { 
  BarChart3, 
  Users, 
  Hospital, 
  UserPlus,
  Menu,
  LogOut,
  Key,
  ChevronRight
} from "lucide-react";
import './HospitalDashboard.css';

const DashboardCard = ({ icon: Icon, count, label, colorClass }) => (
  <div className="dashboard-card">
    <div className="card-content">
      <div className={`icon-container ${colorClass}`}>
        <Icon />
      </div>
      <div className="card-stats">
        <span className="stat-number">{count}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  </div>
);

const MenuItem = ({ children, icon: Icon }) => (
  <li className="menu-item">
    <Icon className="menu-item-icon" />
    <span className="menu-item-text">{children}</span>
    <ChevronRight className="menu-item-icon ml-auto" />
  </li>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Menu className="menu-toggle" />
            <h1 className="logo">Healthify</h1>
          </div>
          <nav className="nav-buttons">
            <button className="nav-button">
              <LogOut />
              <span>Logout</span>
            </button>
            <button className="nav-button primary">
              <Key />
              <span>Change Password</span>
            </button>
          </nav>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Menu</h2>
          <ul className="menu-list">
            <MenuItem icon={Users}>View Patients</MenuItem>
            <MenuItem icon={UserPlus}>Add Patient</MenuItem>
            <MenuItem icon={Hospital}>View Doctors</MenuItem>
            <MenuItem icon={UserPlus}>Add Doctor</MenuItem>
            <MenuItem icon={Key}>Add Staff Credentials</MenuItem>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-wrapper">
            <div className="welcome-card">
              <h2 className="welcome-title">Welcome to Healthify</h2>
              <p className="welcome-text">
                A comprehensive appointment booking system for hospitals, clinics, and dental care.
              </p>
              
              <div className="dashboard-grid">
                <DashboardCard 
                  icon={Hospital}
                  count="150"
                  label="Hospitals"
                  colorClass="blue"
                />
                <DashboardCard 
                  icon={Users}
                  count="1,200"
                  label="Patients"
                  colorClass="teal"
                />
                <DashboardCard 
                  icon={BarChart3}
                  count="300"
                  label="Doctors"
                  colorClass="purple"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Web Development Project. By Sarjak Bhandari.</p>
      </footer>
    </div>
  );
};

export default Dashboard;