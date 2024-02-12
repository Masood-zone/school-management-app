import axios from "axios";
import "../root";

export const registerPayment = async (data) =>
  await axios.post(`/payment/pay`, data);

export const updatePayment = async (data) =>
  await axios.patch(`/payment/updatePayment/${data.id}`, data);

export const removePayment = async (id) =>
  axios.delete(`/payment/deletePayment/${id}`);

export const paymentList = async () =>
  await axios.get(`/payment/paymentreceipts`);

export const getPaymentByStudent = async (id) =>
  await axios.get(`/payment/${id}`);

export const getPaymentsByDate = async (date) =>
  await axios.get(`/payment/date/${date}`);
