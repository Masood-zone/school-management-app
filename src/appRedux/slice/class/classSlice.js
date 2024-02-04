import { createSlice } from "@reduxjs/toolkit";
import { createClass, updateClassInfo, getAllClasses } from "./classFxn";

const initialState = {
  classList: [],
  loading: false,
  success: false,
  error: null,
};

export const classSlice = createSlice({
  name: "classes",
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
      .addCase(createClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(createClass.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.classList = action.payload.getAllClass;
      })
      .addCase(getAllClasses.rejected, (state, action) => {
        state.loading = false;
        state.classList = [];
        state.error = action.payload;
      })
      .addCase(updateClassInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateClassInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateClassInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetData } = classSlice.actions;
export default classSlice.reducer;
