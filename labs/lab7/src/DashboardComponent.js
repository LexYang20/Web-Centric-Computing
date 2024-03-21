import { Link } from 'react-router-dom';

const DashboardComponent = ({ dashboard }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {dashboard && <p>Error: {dashboard}</p>}
      <Link to="/">Back to Form</Link>
    </div>
  );
};

export default DashboardComponent;