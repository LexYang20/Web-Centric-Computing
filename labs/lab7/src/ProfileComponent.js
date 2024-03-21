import { Link } from 'react-router-dom';

const ProfileComponent = ({ data }) => {
    const { firstName, lastName, email, favSeason } = data;
    return (
      <div>
        <h2>Profile</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Favorite Season: {favSeason}</p>
        <Link to="/dashboard">Back to dashboard</Link>
      </div>
    );
};

export default ProfileComponent;
