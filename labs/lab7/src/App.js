import logo from './logo.png';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';

import FormComponent from './FormComponent';
import ProfileComponent from './ProfileComponent';
import DashboardComponent from './DashboardComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} exact />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
