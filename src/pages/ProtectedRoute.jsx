import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuthenticated = true;
  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [navigate, isAuthenticated]);
  return isAuthenticated ? children : null;
}
