import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getStudentList } from "../../appRedux/slice/students/studentsFxn";
import moment from "moment";
import Spinner from "../../components/spinner";
import Forms from "../../components/forms";
import { attendanceMark } from "../../appRedux/slice/attendance/attendanceFxn";
import { resetData } from "../../appRedux/slice/attendance/attendanceSlice";
import { markAttendanceSchema } from "../../schemas/attendanceSchema";

function MarkAttendance() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.attendances);
  const { studentList } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(getStudentList());
  }, []);
  // Students details
  const studentOptions = studentList.map((student) => ({
    label: student.studentFullName,
    value: student.indexNumber,
  }));
  //Attendance Options
  const attendance = [{ status: "present" }, { status: "absent" }];
  const attendanceOptions = attendance.map((status) => ({
    label: status.status,
    value: status.status,
  }));
  // Form submission
  const handleSubmit = (values, { resetForm }) => {
    const formatedDate = moment(values.date).format("YYYY-MM-DD");
    const attendanceData = {
      attendanceStatus: values.attendanceStatus,
      studentid: values.students,
      Date: formatedDate,
    };
    dispatch(attendanceMark(attendanceData)).then(() => {
      dispatch(resetData());
      resetForm();
    });
  };
  // Payment Data
  const attendanceData = [
    {
      label: "Students",
      name: "students",
      type: "select",
      options: studentOptions,
    },
    {
      label: "Attendance Status",
      name: "attendanceStatus",
      type: "select",
      options: attendanceOptions,
    },
    {
      label: "Date",
      name: "date",
      type: "date",
    },
  ];
  // UseEffect
  useEffect(() => {
    if (!loading && success) {
      navigate("/attendance");
      toast.success("Attendance marked successfully!");
    }
    if (error) {
      toast.error(error);
    }
  }, [loading, error, success, navigate]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title"> Mark Attendance</h2>
        <p>
          Mark a Student
          <Link to="/attendance" className="px-5 underline hover:text-blue-500">
            Go Back
          </Link>
        </p>
        {/* Form */}
        {loading ? (
          <Spinner />
        ) : (
          <Forms
            data={attendanceData}
            onSubmit={handleSubmit}
            schema={markAttendanceSchema}
            btnTitle="Mark Attendance"
          />
        )}
      </div>
    </div>
  );
}

export default MarkAttendance;
