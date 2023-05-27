import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to="/iera-administration-login" />;
};
