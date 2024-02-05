import * as yup from "yup";

export const createPaymentSchema = yup.object().shape({
  description: yup.string().required("Field required!"),
  date: yup.date().required("Field required!"),
  amountPaid: yup.number().min(1).required("Field required!"),
});
