import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequiredAuth() {
  const { currentuser } = useAuthContext();
  const location = useLocation();
  return (
    <>
      {currentuser?.email && currentuser?.uid ? (
        <Outlet />
      ) : (
        <Navigate state={{ from: location }} replace to="/login" />
      )}
    </>
  );
}

export default RequiredAuth;
