import React, { useEffect } from "react";
import loginImg from "../../assets/svgs/login-image.svg";
import frameImg from "../../assets/svgs/frame.svg";
import Frame from "../../components/frame";
import { loginSchema } from "../../schemas/loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../appRedux/slice/admins/adminFxn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { resetData } from "../../appRedux/slice/admins/adminSlice";
import Forms from "../../components/forms";
import { loginData } from "./data";
import Notice from "../../components/forms/notice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.admins
  );
  useEffect(() => {
    dispatch(resetData());
  }, []);
  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(loginData));
    resetForm();
  };

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
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Form */}
            <Forms
              data={loginData}
              onSubmit={handleSubmit}
              schema={loginSchema}
              btnTitle="Log in"
            />
            {/* New here? */}
            <Notice
              message="Don't have account yet?"
              link="/signup"
              title=" New Account"
            />
          </>
        )}
      </div>
      <div className="flex-shrink-0 max-w-lg h-max m-auto max-lg:hidden">
        <img src={loginImg} className="" alt="login-art" />
      </div>
    </div>
  );
}

export default Login;
