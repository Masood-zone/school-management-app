import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/loader";
import Forms from "../../components/forms";
import { createClass } from "../../appRedux/slice/class/classFxn";
// import { createClassData } from "./data";

function NewClass() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector((state) => state.classes);

  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    const data = {
      className: values.className,
      classTeacherName: values.classTeacherName,
    };
    console.log(data);
    dispatch(createClass(data)).then(() => {
      resetForm();
    });
  };

  // Class data
  const createClassData = [
    {
      label: "className",
      name: "className",
      placeholder: "Enter class name",
    },
    {
      label: "classTeacherName",
      name: "classTeacherName",
      placeholder: "Enter class teacher name",
    },
  ];

  // Checks for success or error state
  useEffect(() => {
    if (!loading && success) {
      navigate("/class");
    }
    if (error) {
      toast.error(error);
    }
  }, [loading, error, success, navigate]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title">Create a Class</h2>
        <p>
          Register a Class
          <Link to="/class" className="px-5 underline hover:text-blue-500">
            Go Back
          </Link>
        </p>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Forms
              data={createClassData}
              onSubmit={handleSubmit}
              btnTitle="Create"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default NewClass;
