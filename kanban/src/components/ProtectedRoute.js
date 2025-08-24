import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component, activeUser }) {
  if (!activeUser) {
    return <Navigate to="/" />;
  }

  return component;
}

export default ProtectedRoute;