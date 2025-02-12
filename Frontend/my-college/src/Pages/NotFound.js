import { useNavigate } from 'react-router-dom'; // For navigation
import './NotFound.css'; // Import CSS for styling

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
      <button className="not-found-button" onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;