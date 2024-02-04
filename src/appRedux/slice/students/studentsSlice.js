import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  updateStudentInfo,
  getStudentList,
} from "./studentsFxn";

const initialState = {
  studentList: [],
  loading: false,
  success: false,
  error: null,
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    resetData: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload.data;
      })
      .addCase(getStudentList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudentList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.studentList = action.payload.getAllStudents;
      })
      .addCase(getStudentList.rejected, (state, action) => {
        state.loading = false;
        state.studentList = [];
        state.error = action.payload;
      })
      .addCase(updateStudentInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStudentInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateStudentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetData } = studentSlice.actions;
export default studentSlice.reducer;
