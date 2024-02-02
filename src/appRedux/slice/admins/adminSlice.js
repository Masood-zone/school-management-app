import { createSlice } from "@reduxjs/toolkit";
import { register, getAdminList, updateAdminInfo } from "./adminFxn";

const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: admin || null,
  adminDetails: [],
  adminList: [],
  loading: false,
  success: false,
  error: null,
  isAuthenticated: false,
};

export const adminSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.adminDetails = [];
      state.adminList = [];
      state.isAuthenticated = false;
      localStorage.removeItem("admin");
    },
    resetData: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminDetails = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.adminDetails = [];
        state.error = action.payload;
      })
      .addCase(getAdminList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminList = action.payload;
      })
      .addCase(getAdminList.rejected, (state, action) => {
        state.loading = false;
        state.adminList = [];
        state.error = action.payload;
      })
      .addCase(updateAdminInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAdminInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateAdminInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, resetData } = adminSlice.actions;
export default adminSlice.reducer;
