import React, { useEffect } from "react";
import LoginForm from "../../components/forms/LoginForm";
import loginImg from "../../assets/svgs/login-image.svg";
import frameImg from "../../assets/svgs/frame.svg";
import { useFormik } from "formik";
import Frame from "../../components/frame";
import { loginSchema } from "../../schemas/loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../appRedux/slice/admins/adminFxn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.admins
  );
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
      dispatch(login(loginData));
      console.log(loginData);
      resetForm();
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Admin login successful!");
      navigate("/");
    }
    if (error) {
      console.log(error);
      toast.error(error);
    }
  }, [isAuthenticated, navigate, error]);

  return (
    <div className="w-screen h-screen bg-[#F1F4FA] flex items-center gap-20">
      {/* Frame (Login) */}
      <div className="flex flex-col items-center justify-center w-96 bg-white h-full flex-shrink-0 max-lg:w-full p-8 max-sm:p-1">
        <Frame image={frameImg} text="Log in" />
        {/* Form */}
        {loading ? <Loader /> : <LoginForm formik={formik} />}
      </div>
      <div className="flex-shrink-0 max-w-lg h-max m-auto max-lg:hidden">
        <img src={loginImg} className="" alt="login-art" />
      </div>
    </div>
  );
}

export default Login;
