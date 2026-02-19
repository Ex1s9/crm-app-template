import { getToken } from "@shared/api";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const token = getToken();

  return token ? <Outlet /> : <Navigate to="/login" />;
};
