import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Protected({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
