import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerPayment,
  updatePayment,
  paymentList,
  getPaymentByStudent,
  getPaymentsByDate,
  removePayment,
} from "../../api/payments";

export const register = createAsyncThunk(
  "payment/register-payment",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerPayment(payload);
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

export const updatePaymentInfo = createAsyncThunk(
  "payment/update-payment",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updatePayment(payload);
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

export const getPaymentList = createAsyncThunk(
  "payment/payment-list",
  async () => {
    const response = await paymentList();
    return response.data;
  }
);

export const deletePayment = createAsyncThunk(
  "payment/remove-payment",
  async (id) => await removePayment(id)
);

export const getPaymentByStudentId = createAsyncThunk(
  "payment/get-payment-studentId",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPaymentByStudent(payload);
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
export const getPaymentByDates = createAsyncThunk(
  "payment/get-payment-by-date",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPaymentsByDate(payload);
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
