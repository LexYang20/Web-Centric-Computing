import logo from './logo.png';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import FormComponent from './FormComponent';
import ProfileComponent from './ProfileComponent';
import DashboardComponent from './DashboardComponent';

              
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FormComponent} />
        <Route path="/profile" component={ProfileComponent} />
        <Route path="/dashboard" component={DashboardComponent} />
      </Switch>
    </Router>
  );
}


export default App;