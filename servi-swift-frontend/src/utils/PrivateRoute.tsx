import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }: any) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
