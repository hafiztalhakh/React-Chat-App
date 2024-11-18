import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const auth = false;

  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
