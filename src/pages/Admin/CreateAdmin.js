import { useFormik } from "formik";
import React, { useEffect } from "react";
import SignupForm from "../../components/forms/SignupForm";
import { signupSchema } from "../../schemas/signupSchema";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../appRedux/slice/admins/adminFxn";
import { resetData } from "../../appRedux/slice/admins/adminSlice";

function CreateAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.admins);
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
    onSubmit: (values, { resetForm }) => {
      const data = {
        phoneNumber: values.telephone,
        email: values.email,
        fullName: values.fullname,
        password: values.password,
      };
      dispatch(register(data)).then(() => {
        dispatch(resetData());
        resetForm();
      });
    },
  });

  useEffect(() => {
    if (!loading && success) {
      navigate("/admin");
    }
    if (error) {
      toast.error(error);
    }
  }, [loading, error, success, navigate]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title">Create an Admin</h2>
        <p>
          Register an Admin{" "}
          <Link to="/admin" className="px-5 underline hover:text-blue-500">
            Go Back
          </Link>
        </p>
        {/* Form */}
        <SignupForm formik={formik} hasAccount={false} />
      </div>
    </div>
  );
}

export default CreateAdmin;
