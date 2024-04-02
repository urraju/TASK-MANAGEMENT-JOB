import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './loading.css'
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <div class="spinner">
          <div class="outer">
            <div class="inner tl"></div>
            <div class="inner tr"></div>
            <div class="inner br"></div>
            <div class="inner bl"></div>
          </div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};
export default PrivateRoute;
