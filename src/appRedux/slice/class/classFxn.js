import { createAsyncThunk } from "@reduxjs/toolkit";
import {} from "../../api/students";
import {
  allClasses,
  registerClass,
  removeClass,
  updateClass,
} from "../../api/class";

export const createClass = createAsyncThunk(
  "class/register-class",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerClass(payload);
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

export const updateClassInfo = createAsyncThunk(
  "class/update-class",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateClass(payload);
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

export const getAllClasses = createAsyncThunk("class/class-list", async () => {
  const response = await allClasses();
  return response.data;
});

export const deleteStudent = createAsyncThunk(
  "class/remove-class",
  async (id) => await removeClass(id)
);
