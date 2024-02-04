import axios from "axios";
import "../root";

export const registerStudent = async (data) =>
  await axios.post(`/student/registerStudent`, data);

export const updateStudent = async (data) =>
  await axios.patch(`/student/updateStudent/${data.id}`, data);

export const removeStudent = async (id) =>
  axios.delete(`/student/deleteStudent/${id}`);

export const studentList = async () =>
  await axios.get(`/student/getAllStudents`);

// Fetch all students by class id
export const getAllStudentsByClass = async (id) =>
  await axios.get(`/student/${id}/students`);
