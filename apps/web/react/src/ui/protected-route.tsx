import Spinner from './spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '@aso/web-auth-data-access';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading)
        navigate(`/login?redirectTo=${location.pathname}`);
    },
    [isAuthenticated, isLoading, location.pathname, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
