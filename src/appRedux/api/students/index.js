import axios from "axios";
import "../root";

export const registerStudent = async (data) =>
  await axios.post(`/student/register`, data);

export const updateStudent = async (data) =>
  await axios.patch(`/student/${data.id}`, data);

export const removeStudent = async (id) => axios.delete(`/student/${id}`);

export const studentList = async () => await axios.get(`/student/list`);
