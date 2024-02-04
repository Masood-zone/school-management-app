import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClasses } from "../../appRedux/slice/class/classFxn";
import NewStudentForm from "../../components/forms/NewStudentForm";

function NewStudent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Selectors for students and class list
  const { loading, success, error } = useSelector((state) => state.students);
  const { classList } = useSelector((state) => state.classes);
  // State (Gender, Class)
  const [selectedGender, setSelectedGender] = useState(null);
  const [studentClass, setStudentClass] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  // Fetch classes
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

  useEffect(() => {
    if (!loading && success) {
      navigate("/students");
    }
    if (error) {
      toast.error(error);
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
        <NewStudentForm
          initialValues={{
            fullname: "",
            dob: "",
            age: "",
            indexNumber: "",
            parentName: "",
            parentContact: "",
          }}
          dispatch={dispatch}
          selectedGender={selectedGender}
          selectedClass={selectedClass}
          classOptions={classOptions}
          setSelectedClass={setSelectedClass}
          setSelectedGender={setSelectedGender}
          genderOptions={genderOptions}
        />
      </div>
    </div>
  );
}

export default NewStudent;
