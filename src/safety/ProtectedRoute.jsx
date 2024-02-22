import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
  const arth = localStorage.getItem("loggedin");
  return arth ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
