import { useFormik } from "formik";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createClass } from "../../appRedux/slice/class/classFxn";
import { toast } from "react-toastify";
import { getStudentList } from "../../appRedux/slice/students/studentsFxn";
import Loader from "../../components/loader";

function NewClass() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const { loading, success, error } = useSelector((state) => state.classes);
  const { studentList } = useSelector((state) => state.students);
  // Getting students list
  useEffect(() => {
    dispatch(getStudentList());
  }, [dispatch]);
  // Form
  const formik = useFormik({
    initialValues: {
      className: "",
      classTeacherName: "",
    },
    onSubmit: (values, { resetForm }) => {
      const data = {
        className: values.className,
        classTeacherName: values.classTeacherName,
        students: students,
      };
      console.log(data);
      // dispatch(createClass(data)).then(() => {
      //   resetForm();
      // });
    },
  });

  // Students options
  const studentOptions = studentList?.map((student) => ({
    label: student.studentFullName,
    value: student.id,
  }));

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
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col w-full "
            >
              {/* Class Name */}
              <div className="flex flex-col my-1">
                <label htmlFor="className" className="font-medium">
                  Class Name
                </label>
                <input
                  type="text"
                  name="className"
                  placeholder="Type a class name"
                  className="bg-gray-200 py-3 px-2 mt-1 rounded-md"
                  value={formik.values.className}
                  onChange={formik.handleChange}
                />
              </div>
              {/* Clas Teacher */}
              <div className="flex flex-col my-1">
                <label htmlFor="classTeacherName" className="font-medium">
                  Class Teacher Name
                </label>
                <input
                  type="text"
                  name="classTeacherName"
                  placeholder="Type a class name"
                  className="bg-gray-200 py-3 px-2 mt-1 rounded-md"
                  value={formik.values.classTeacherName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col my-1">
                <label htmlFor="students" className="font-medium">
                  Students
                </label>
                <Select
                  options={studentOptions}
                  isMulti
                  onChange={setStudents}
                />
              </div>
              <button
                className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
                type="submit"
              >
                Create Class
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default NewClass;
