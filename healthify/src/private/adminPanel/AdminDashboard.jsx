import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ hospitals: 0, staff: 0, patients: 0 });
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));

    fetch("/api/hospitals")
      .then((res) => res.json())
      .then((data) => setHospitals(data));
  }, []);

  const deleteHospital = async (id) => {
    if (window.confirm("Are you sure you want to delete this hospital?")) {
      await fetch(`/api/hospitals/${id}`, { method: "DELETE" });
      setHospitals(hospitals.filter((hospital) => hospital.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <nav className="mb-8 flex justify-between bg-teal-600 text-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="space-x-4">
          <Link className="hover:underline" to="/dashboard">Dashboard</Link>
          <Link className="hover:underline" to="/manage-hospitals">Manage Hospitals</Link>
          <Link className="hover:underline" to="/manage-staff">Manage Staff</Link>
          <Link className="hover:underline" to="/manage-patients">Manage Patients</Link>
          <Link className="hover:underline" to="/logout">Logout</Link>
        </div>
      </nav>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl text-gray-700">Total Hospitals</h2>
          <p className="text-3xl font-bold text-teal-600">{stats.hospitals}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl text-gray-700">Total Staff</h2>
          <p className="text-3xl font-bold text-teal-600">{stats.staff}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl text-gray-700">Total Patients</h2>
          <p className="text-3xl font-bold text-teal-600">{stats.patients}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Hospitals</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg border border-gray-300">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital.id} className="border-b border-gray-300">
                <td className="p-4 text-gray-800">{hospital.name}</td>
                <td className="p-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" onClick={() => deleteHospital(hospital.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
