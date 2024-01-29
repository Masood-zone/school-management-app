import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import loginImg from "../../assets/svgs/login-image.svg";
import frameImg from "../../assets/svgs/frame.svg";

function Login() {
  return (
    <div className="w-screen h-screen bg-[#F1F4FA] flex items-center gap-20">
      {/* Frame (Login) */}
      <div className="flex flex-col items-center justify-center w-96 bg-white h-full flex-shrink-0 max-lg:w-full">
        <div className="w-[90px] flex flex-col justify-center items-center gap-2">
          <img src={frameImg} className="w-full" alt="Frame" />
          <p className="font-bold text-lg">Log in</p>
        </div>
        {/* Form */}
        <LoginForm />
      </div>
      <div className="flex-shrink-0 max-w-lg h-max m-auto max-lg:hidden">
        <img src={loginImg} className="" alt="login-art" />
      </div>
    </div>
  );
}

export default Login;
