import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClasses } from "../../appRedux/slice/class/classFxn";
import { createStudent } from "../../appRedux/slice/students/studentsFxn";
import Spinner from "../../components/spinner";
import Forms from "../../components/forms";
import { createStudentSchema } from "../../schemas/studentSchema";

function NewStudent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Selectors for students and class list
  const { loading, success, error } = useSelector((state) => state.students);
  const { classList } = useSelector((state) => state.classes);
  // State (Class)
  const [studentClass, setStudentClass] = useState([]);
  // Fetch class
  useEffect(() => {
    dispatch(getAllClasses());
  }, []);
  useEffect(() => {
    if (classList) {
      setStudentClass(classList);
    }
  }, [classList]);

  // Gender Options
  const genders = [
    {
      gender: "Male",
    },
    {
      gender: "Female",
    },
  ];
  const genderOptions = genders.map((gender) => ({
    label: gender.gender,
    value: gender.gender,
  }));
  // Class Options
  const classOptions = studentClass?.map((studentClass) => ({
    label: studentClass.className,
    value: studentClass.id,
  }));

  // Form submission
  const handleSubmit = (values, { resetForm }) => {
    const newStudent = {
      studentFullName: values.fullname,
      dob: values.dob,
      age: values.age,
      indexNumber: values.indexNumber,
      parentFullName: values.parentName,
      parentContact: values.parentContact,
      gender: values.gender,
      classId: values.class,
    };
    dispatch(createStudent(newStudent));
    resetForm();
  };

  // Student Data
  const studentData = [
    {
      label: "fullname",
      name: "fullname",
      placeholder: "Enter full name",
      type: "text",
    },
    {
      label: "Dob",
      name: "dob",
      placeholder: "Date of Birth",
      type: "date",
    },
    {
      label: "age",
      name: "age",
      placeholder: "Enter age",
      type: "number",
    },
    {
      label: "index Number",
      name: "indexNumber",
      placeholder: "Enter index number",
      type: "text",
    },
    {
      label: "Parent Name",
      name: "parentName",
      placeholder: "Enter parent name",
      type: "text",
    },
    {
      label: "Parent Contact",
      name: "parentContact",
      placeholder: "Enter parent contact",
      type: "text",
    },
    {
      label: "Gender",
      name: "gender",
      options: genderOptions,
      type: "select",
    },
    {
      label: "Class",
      name: "class",
      options: classOptions,
      type: "select",
    },
  ];

  // Effect checker for navigating through sites
  useEffect(() => {
    if (!loading && success) {
      toast.success("Student created successfully!");
      navigate("/students");
    }
    if (error) {
      toast.error(error.message);
    }
  }, [loading, error, success, navigate]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title">Create a Student</h2>
        <p>
          Register a Student
          <Link to="/students" className="px-5 underline hover:text-blue-500">
            Go Back
          </Link>
        </p>
        {/* Form */}
        {loading ? (
          <Spinner />
        ) : (
          <Forms
            data={studentData}
            onSubmit={handleSubmit}
            schema={createStudentSchema}
            btnTitle="Create"
          />
        )}
      </div>
    </div>
  );
}

export default NewStudent;
