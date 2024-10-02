import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  if (!isAuthenticated) navigate('/');
  return isAuthenticated ? children : null;
}
