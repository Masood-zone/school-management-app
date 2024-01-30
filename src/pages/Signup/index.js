import React, { useState } from "react";
import SignupForm from "../../components/forms/SignupForm";
import { useFormik } from "formik";
import frameImg from "../../assets/svgs/frame.svg";
import signupImg from "../../assets/svgs/signup-image.svg";
import { signupSchema } from "./signupSchema";
import { mutate } from "swr";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { createUser } from "../../utils/userSignup";
import Frame from "../../components/frame";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Form handler
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      telephone: "",
      password: "",
      confirmPwd: "",
    },
    validationSchema: signupSchema,
    // POST Request submission
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const loginData = {
        phoneNumber: values.telephone,
        email: values.email,
        fullname: values.fullname,
        password: values.password,
      };

      try {
        // Called function for the post request
        await createUser("http://localhost:8000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
        // Request to be sent to the users endpoint
        mutate("/users");
        resetForm();
        setLoading(false);
        navigate("/login");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-screen h-screen bg-[#F1F4FA] flex items-center gap-20">
      {/* Frame (Login) */}
      <div className="flex flex-col items-center justify-center w-96 bg-white h-full flex-shrink-0 max-lg:w-full p-8 max-sm:p-1">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Frame image={frameImg} text="Sign in" />
            <SignupForm formik={formik} />
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
