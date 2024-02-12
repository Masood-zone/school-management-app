import * as yup from "yup";

export const markAttendanceSchema = yup.object().shape({
  students: yup.string().required("Provide student name"),
  attendanceStatus: yup.string().required("Provide status"),
  date: yup.string().required("Provide date"),
});
