import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    <div>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default PrivateRoute;
