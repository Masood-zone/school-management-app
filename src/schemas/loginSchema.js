import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please enter your email!"),
  password: yup.string().required().min(5),
});
