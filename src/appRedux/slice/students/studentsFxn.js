import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  studentList,
  removeStudent,
  updateStudent,
  registerStudent,
} from "../../api/students";

export const createStudent = createAsyncThunk(
  "students/register-student",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerStudent(payload);
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

export const updateStudentInfo = createAsyncThunk(
  "students/update-student",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateStudent(payload);
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

export const getStudentList = createAsyncThunk(
  "students/students-list",
  async () => {
    const response = await studentList();
    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/remove-student",
  async (id) => await removeStudent(id)
);
