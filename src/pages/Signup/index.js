import React, { useEffect } from "react";
import frameImg from "../../assets/svgs/frame.svg";
import signupImg from "../../assets/svgs/signup-image.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import Frame from "../../components/frame";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../appRedux/slice/admins/adminFxn";
import { toast } from "react-toastify";
import { signupSchema } from "../../schemas/signupSchema";
import Forms from "../../components/forms";
import Notice from "../../components/forms/notice";
import { formData } from "./data";
import { resetData } from "../../appRedux/slice/admins/adminSlice";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.admins);
  useEffect(() => {
    dispatch(resetData());
  }, []);
  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    const loginData = {
      phoneNumber: values.telephone,
      email: values.email,
      fullName: values.fullname,
      password: values.password,
    };
    dispatch(register(loginData));
    resetForm();
  };

  useEffect(() => {
    if (!loading && success) {
      navigate("/login");
    }
    if (error) {
      toast.error(error);
    }
  }, [loading, error, navigate, success]);

  return (
    <div className="w-screen h-screen bg-[#F1F4FA] flex items-center gap-20">
      {/* Frame (Login) */}
      <div className="flex flex-col items-center justify-center w-96 scale-90 bg-white h-full flex-shrink-0 max-lg:w-full p-8 max-sm:p-1">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Frame image={frameImg} text="Sign in" />
            {/* Form */}
            <Forms
              data={formData}
              onSubmit={handleSubmit}
              schema={signupSchema}
              btnTitle="Create Account"
            />
            {/* Already have an account? */}
            <Notice
              message="Already have an Account?"
              link="/login"
              title="Log in"
            />
          </>
        )}
      </div>
      {/* Signup Image */}
      <div className="flex-shrink-0 max-w-lg h-max m-auto max-lg:hidden">
        <img src={signupImg} className="" alt="login-art" />
      </div>
    </div>
  );
}

export default SignUp;
