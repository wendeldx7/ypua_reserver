import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem("token"); 
};

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
