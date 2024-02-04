import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateClassInfo } from "../../appRedux/slice/class/classFxn";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";

function EditClass() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Class Info
  const { classList, loading, success, error } = useSelector(
    (state) => state.classes
  );
  const currentClass = classList.find((classes) => classes.id === id);

  // Form Submission
  const formik = useFormik({
    initialValues: {
      className: currentClass ? currentClass.className : "",
      classTeacherName: currentClass ? currentClass.classTeacherName : "",
    },
    onSubmit: (values, { resetForm }) => {
      const classData = {
        id,
        className: values.className,
        classTeacherName: values.classTeacherName,
      };
      dispatch(updateClassInfo(classData));
      resetForm();
    },
  });

  // UseEffect that checks for the success state and then navigates the user
  useEffect(() => {
    if (!loading && success) {
      toast.success("Class updated!");
      navigate("/class");
    }
    if (error) {
      toast.error(error.message);
    }
  }, [loading, navigate, success, error]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto mt-10">
      <div className="card-body">
        <h2 className="card-title">
          Edit Admin ({currentClass.className})
          <Link to="/class" className=" underline hover:text-blue-500">
            Go Back
          </Link>
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <form className="w-full flex-col my-1" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-1">
              <label htmlFor="className" className="font-medium">
                Class Name
              </label>
              <input
                type="text"
                name="className"
                className="bg-gray-200 py-3 px-2 mt-1 rounded-md "
                value={formik.values.className}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="classTeacherName" className="font-medium">
                Class Teacher Name
              </label>
              <input
                type="text"
                name="classTeacherName"
                className="bg-gray-200 py-3 px-2 mt-1 rounded-md "
                value={formik.values.classTeacherName}
                onChange={formik.handleChange}
              />
            </div>
            <button
              className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
              type="submit"
            >
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditClass;
