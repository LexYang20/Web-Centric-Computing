import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardComponent.css'

const DashboardComponent = ({ dashboard }) => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {dashboard && <p>Welcome to dashboard{dashboard}</p>}
      <Link to="/">Back to Profile</Link>
    </div>
  );
};

export default DashboardComponent;