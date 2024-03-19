import logo from './logo.png';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

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

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favSeason: '',
  });
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      setError('First Name and Last Name must be filled out.');
      return false;
    }
    if (!emailPattern.test(formData.email)) {
      setError('Invalid Email format.');
      return false;
    }
    if (!passwordPattern.test(formData.password)) {
      setError('Password must contain at least 8 characters, including 1 uppercase letter, 1 number, and 1 special character.');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setError('');
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to={{ pathname: "/profile", state: formData }} />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>First Name: </label>
          <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        </div>

        <div>
          <label>Last Name: </label>
          <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>

        <div>
          <label>Password: </label>
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>

        <div>
          <label>Favorite Season: </label>
          <select value={formData.favSeason} onChange={(e) => setFormData({ ...formData, favSeason: e.target.value })}>
            <option value="">Select a Season</option>
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

const ProfileComponent = ({ location }) => {
  const { firstName, lastName, email, favSeason } = location.state;

  return (
    <div>
      <h2>Profile</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Favorite Season: {favSeason}</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

const DashboardComponent = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/">Back to Form</Link>
    </div>
  );
};

export default App;
