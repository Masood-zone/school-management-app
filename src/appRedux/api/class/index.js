import axios from "axios";
import "../root";

export const registerClass = async (data) =>
  await axios.post(`/class/addClass`, data);

export const allClasses = async () => await axios.get(`/class/getClass`);

export const updateClass = async (data) =>
  await axios.patch(`/class/${data.id}`, data);

export const removeClass = async (id) => axios.delete(`/class/${id}`);

// Fetch a class by student id
export const getClassByStudentId = async (id) => {
  axios.get(`/class/${id}`);
};
