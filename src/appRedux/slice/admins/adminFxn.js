import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  adminList,
  adminLogin,
  registerAdmin,
  removeAdmin,
  updateAdmin,
} from "../../api/admins";

export const register = createAsyncThunk(
  "admin/register-admin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerAdmin(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "admin/admin-login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await adminLogin(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAdminInfo = createAsyncThunk(
  "admin/update-admin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateAdmin(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAdminList = createAsyncThunk("admin/admin-list", async () => {
  const response = await adminList();
  return response.data;
});

export const deleteAdmin = createAsyncThunk(
  "admin/remove-admin",
  async (id) => await removeAdmin(id)
);
