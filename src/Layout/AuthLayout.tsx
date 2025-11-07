import { useAuthStore, useTokenStore } from "@/store";
import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  const token = useTokenStore((state) => state.token);
  const authStatus = useAuthStore((state) => state.authStatus);

  if (authStatus && token) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
