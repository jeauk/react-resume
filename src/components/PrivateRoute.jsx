// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const jwt = sessionStorage.getItem('jwt');
  
  return jwt ? <Element {...rest} /> : <Navigate to="/1" />;
};

export default PrivateRoute;
