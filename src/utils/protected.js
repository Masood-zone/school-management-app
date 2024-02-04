import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ children }) {
  const admin = useSelector((state) => state.admins);
  const location = useLocation();

  if (!admin.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default Protected;
