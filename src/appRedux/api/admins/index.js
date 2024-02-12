import axios from "axios";
import "../root";

export const registerAdmin = async (data) =>
  await axios.post(`/admin/register`, data);

export const adminLogin = async (data) =>
  await axios.post(`/admin/login`, data);

export const updateAdmin = async (data) =>
  await axios.patch(`/admin/${data.id}`, data);

export const removeAdmin = async (id) => axios.delete(`/admin/${id}`);

export const adminList = async () => await axios.get(`/admin/list`);
