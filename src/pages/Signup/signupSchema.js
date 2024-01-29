import * as yup from "yup";

const signupRegEx = /^(?=.{5,})/;

export const signupSchema = yup.object().shape({
  telephone: yup.string().required("Please enter your full name"),
  email: yup.string().email().required("Please enter your email"),
  fullname: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(signupRegEx, "Must contain more than 5 characters"),
  confirmPwd: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
