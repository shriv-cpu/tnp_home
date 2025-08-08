import { useAuth } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

import React from 'react';

const RequireAuth: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const auth = useAuth();
  if (!auth || !auth.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;