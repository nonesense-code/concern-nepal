import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isAuth: boolean;
  children: React.ReactElement;
};

const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
