import { LoginForm } from "@/components";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center p-5 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
