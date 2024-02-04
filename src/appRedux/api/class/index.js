import axios from "axios";
import "../root";

export const registerClass = async (data) =>
  await axios.post(`/class/registerClass`, data);

export const allClasses = async () => await axios.get(`/class/getAllClass`);

export const updateClass = async (data) =>
  await axios.patch(`/class/updateClass/${data.id}`, data);

export const removeClass = async (id) =>
  axios.delete(`/class/deleteClass/${id}`);

// Fetch a class by student id
export const getClassByStudentId = async (id) => {
  axios.get(`/class/${id}/class`);
};
