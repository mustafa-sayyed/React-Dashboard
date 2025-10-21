import { SignupForm } from "@/components";
import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center p-5 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
