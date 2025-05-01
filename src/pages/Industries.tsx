
import { Navigate } from 'react-router-dom';

// Redirect to a default industry (restaurants)
const Industries = () => {
  return <Navigate to="/industries/restaurants" replace />;
};

export default Industries;
