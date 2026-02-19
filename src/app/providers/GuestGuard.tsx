import { getToken } from "@shared/api";
import { Navigate, Outlet } from "react-router-dom";

export const GuestGuard = () => {
  const token = getToken();

  return token ? <Navigate to="/" /> : <Outlet />;
};
