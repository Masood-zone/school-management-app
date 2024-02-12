import { createSlice } from "@reduxjs/toolkit";
import {
  allAttendance,
  attendanceMark,
  getAttendanceWithDate,
  attendanceUpdate,
  getAttendanceByStudent,
} from "./attendanceFxn";

const initialState = {
  attendanceList: [],
  attendanceDate: [],
  attendanceByStudent: [],
  loading: false,
  success: false,
  error: null,
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    resetData: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allAttendance.pending, (state) => {
        state.loading = true;
      })
      .addCase(allAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.attendanceList = action.payload.attendance;
      })
      .addCase(allAttendance.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(attendanceMark.pending, (state) => {
        state.loading = true;
      })
      .addCase(attendanceMark.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(attendanceMark.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      })
      .addCase(getAttendanceWithDate.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAttendanceWithDate.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.attendanceDate = action.payload;
      })
      .addCase(getAttendanceWithDate.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      })
      .addCase(attendanceUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(attendanceUpdate.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(attendanceUpdate.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      })
      .addCase(getAttendanceByStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAttendanceByStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.attendanceByStudent = action.payload;
      })
      .addCase(getAttendanceByStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export const { resetData } = attendanceSlice.actions;
export default attendanceSlice.reducer;
