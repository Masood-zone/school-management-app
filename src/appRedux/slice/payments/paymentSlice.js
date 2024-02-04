import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  updatePaymentInfo,
  getPaymentList,
  getPaymentByStudentId,
  getPaymentByDates,
} from "./paymentFxn";

const initialState = {
  paymentList: [],
  paymentByStudentList: [],
  paymentByDateList: [],
  loading: false,
  success: false,
  error: null,
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    reset: (state) => {
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
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPaymentList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentList = action.payload.getAllPayments;
      })
      .addCase(getPaymentList.rejected, (state, action) => {
        state.loading = false;
        state.classList = [];
        state.error = action.payload;
      })
      .addCase(updatePaymentInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePaymentInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updatePaymentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPaymentByStudentId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentByStudentId.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentByStudentList = action.payload;
      })
      .addCase(getPaymentByStudentId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPaymentByDates.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentByDates.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentByDateList = action.payload;
      })
      .addCase(getPaymentByDates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = paymentSlice.actions;
export default paymentSlice.reducer;
