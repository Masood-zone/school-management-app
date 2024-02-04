import axios from "axios";
import "../root";

export const registerAdmin = async (data) =>
  await axios.post(`/admin/registerAdmin`, data);

export const adminLogin = async (data) =>
  await axios.post(`/admin/login`, data);

export const updateAdmin = async (data) =>
  await axios.patch(`/admin/updateAdmin/${data.id}`, data);

export const removeAdmin = async (id) =>
  axios.delete(`/admin/deleteAdmin/${id}`);

export const adminList = async () => await axios.get(`/admin/getAllAdmins`);
