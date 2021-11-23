import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children, userAuth }) {

  if (!userAuth) {
    return <Navigate to='/login' />;
  }

  return children;
}
