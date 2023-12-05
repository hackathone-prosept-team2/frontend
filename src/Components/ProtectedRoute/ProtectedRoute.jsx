import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"

const ProtectedRoute = ({ component: Component, ...props }) => {
    //const { isAuthenticated } = useSelector((state)=> state.auth)

  const isAuthenticated = true

    return isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" replace />
  };

  export default ProtectedRoute;
