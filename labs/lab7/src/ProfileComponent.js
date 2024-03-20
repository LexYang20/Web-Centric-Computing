import {Link } from 'react-router-dom';

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

export default ProfileComponent;