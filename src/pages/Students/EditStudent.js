import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateStudentInfo } from "../../appRedux/slice/students/studentsFxn";
import EditStudentForm from "../../components/forms/EditStudentForm";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { getAllClasses } from "../../appRedux/slice/class/classFxn";
import Spinner from "../../components/spinner";
import moment from "moment";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // User info
  const { studentList, loading, success, error } = useSelector(
    (state) => state.students
  );
  const { classList } = useSelector((state) => state.classes);
  const currentStudent = studentList.find((student) => student.id === id);
  const [studentClass, setStudentClass] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
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

  // Form submission
  const formik = useFormik({
    initialValues: {
      fullname: currentStudent ? currentStudent.studentFullName : "",
      dob: "",
      age: currentStudent ? currentStudent.age : "",
      indexNumber: currentStudent ? currentStudent.index : "",
      parentName: currentStudent ? currentStudent.parentFullName : "",
      parentContact: currentStudent ? currentStudent.parentContact : "",
    },
    onSubmit: (values, { resetForm }) => {
      const formatedDob = moment(values.dob).format("YYYY-MM-DD");
      const newStudent = {
        id,
        studentFullName: values.fullname,
        dob: formatedDob,
        age: values.age,
        index: values.indexNumber,
        parentFullName: values.parentName,
        parentContact: values.parentContact,
        gender: selectedGender,
        classId: selectedClass,
      };
      dispatch(updateStudentInfo(newStudent)).then(() => {
        resetForm();
      });
    },
  });

  // UseEffect that checks for the success state and then navigates the user
  useEffect(() => {
    if (!loading && success) {
      toast.success("Student updated!");
      navigate("/students");
    }
    if (error) {
      toast.error(error.message);
    }
  }, [loading, navigate, success, error]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title">
          Edit Student ({currentStudent.studentFullName})
          <Link to="/students" className="px-1 underline hover:text-blue-500">
            Go Back
          </Link>
        </h2>
        {/* Form */}
        {loading ? (
          <Spinner />
        ) : (
          <EditStudentForm
            formik={formik}
            genderOptions={genderOptions}
            setSelectedClass={setSelectedClass}
            classOptions={classOptions}
            setSelectedGender={setSelectedGender}
          />
        )}
      </div>
    </div>
  );
}

export default EditStudent;
