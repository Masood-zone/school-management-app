import axios from "axios";
import "../root";

export const getAllAttendance = async (data) =>
  await axios.get(`/attendance/getAttendance`, data);

export const markAttendance = async (data) => {
  await axios.post(`/attendance/markAttendance`, data);
};

export const getAttendanceByDate = async (date) => {
  await axios.get(`/attendance/date/${date}`);
};

export const updateAttendance = async (id) => {
  await axios.patch(`/attendance/update/${id}`);
};

export const getAttendanceByStudentId = async (id) => {
  await axios.get(`/attendance/${id}`);
};
