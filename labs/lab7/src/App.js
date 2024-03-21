import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormComponent from './FormComponent';
import ProfileComponent from './ProfileComponent';
import DashboardComponent from './DashboardComponent';

const App = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [errorDashboard, setErrorDashboard] = useState('');

  const handleSubmit = ({ isValid, data }) => {
    if (isValid) {
      setUserProfile(data);
      setErrorDashboard('');
    } else {
      setErrorDashboard('errors'); 
      setUserProfile(null);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={userProfile ? <Navigate replace to="/profile" /> : <FormComponent onSubmit={handleSubmit} />} />
        <Route path="/profile" element={userProfile ? <ProfileComponent data={userProfile} /> : <Navigate replace to="/" />} />
        <Route path="/dashboard" element={<DashboardComponent dashboard={errorDashboard} />} />
      </Routes>
    </Router>
  );
};

export default App;
