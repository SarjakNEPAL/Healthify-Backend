import React from 'react';
import { 
  BarChart3, 
  Users, 
  Hospital, 
  UserPlus,
  Menu,
  LogOut,
  Key,
  ChevronRight
} from 'lucide-react';
import './HospitalDashboard.css';

const StatCard = ({ icon: Icon, count, label, colorClass }) => (
  <div className="stat-card">
    <div className={`stat-icon ${colorClass}`}>
      <Icon size={24} />
    </div>
    <div className="stat-info">
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  </div>
);

const MenuItem = ({ icon: Icon, children }) => (
  <li className="menu-item">
    <Icon size={20} />
    <span>{children}</span>
    <ChevronRight className="ml-auto" size={16} />
  </li>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <Menu className="menu-toggle" color="white" />
          <h1 className="logo">Healthify</h1>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
          <button className="nav-button">
            <Key size={20} />
            <span>Change Password</span>
          </button>
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
          <div className="welcome-card">
            <h2 className="welcome-title">Welcome to Healthify</h2>
            <p className="welcome-text">
              A comprehensive appointment booking system for hospitals, clinics, and dental care.
            </p>
            
            <div className="stats-grid">
              <StatCard 
                icon={Hospital}
                count="150"
                label="Hospitals"
                colorClass="blue"
              />
              <StatCard 
                icon={Users}
                count="1,200"
                label="Patients"
                colorClass="green"
              />
              <StatCard 
                icon={BarChart3}
                count="300"
                label="Doctors"
                colorClass="purple"
              />
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