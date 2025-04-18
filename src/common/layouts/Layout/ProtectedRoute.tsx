import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserFromTokenQuery } from 'src/app/apis/authApi';

const ProtectedRoute = () => {
  const { data: user } = useGetUserFromTokenQuery();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
