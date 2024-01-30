import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import loginImg from "../../assets/svgs/login-image.svg";
import frameImg from "../../assets/svgs/frame.svg";
import { useFormik } from "formik";
import { loginSchema } from "./loginSchema";
import Frame from "../../components/frame";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      const loginData = {
        email: values.email,
        password: values.password,
      };
      console.log(loginData);
      resetForm();
    },
  });

  return (
    <div className="w-screen h-screen bg-[#F1F4FA] flex items-center gap-20">
      {/* Frame (Login) */}
      <div className="flex flex-col items-center justify-center w-96 bg-white h-full flex-shrink-0 max-lg:w-full p-8 max-sm:p-1">
        <Frame image={frameImg} text="Log in" />
        {/* Form */}
        <LoginForm formik={formik} />
      </div>
      <div className="flex-shrink-0 max-w-lg h-max m-auto max-lg:hidden">
        <img src={loginImg} className="" alt="login-art" />
      </div>
    </div>
  );
}

export default Login;
