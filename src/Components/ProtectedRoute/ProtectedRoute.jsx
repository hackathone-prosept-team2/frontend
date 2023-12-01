import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux" 

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector((state)=> state.auth)
    console.log(isAuthenticated, "пользователь")

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" replace />
  };
  
  export default ProtectedRoute;