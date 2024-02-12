import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllAttendance,
  markAttendance,
  getAttendanceByDate,
  updateAttendance,
  getAttendanceByStudentId,
} from "../../api/attendance";

export const allAttendance = createAsyncThunk(
  "attendance/get-all-attendance",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getAllAttendance(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const attendanceMark = createAsyncThunk(
  "attendance/mark-attendance",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await markAttendance(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const getAttendanceWithDate = createAsyncThunk(
  "attendance/get-attendance-with-date",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getAttendanceByDate(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const attendanceUpdate = createAsyncThunk(
  "attendance/update-attendance",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateAttendance(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const getAttendanceByStudent = createAsyncThunk(
  "attendance/get-attendance-by-student",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getAttendanceByStudentId(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);
