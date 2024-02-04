import * as yup from "yup";

export const createStudentSchema = yup.object().shape({
  fullname: yup.string().required("Please enter your full name!"),
  dob: yup.date().required("Provide a date!"),
  age: yup.number().min(10).max(30).required("Enter student age!"),
  indexNumber: yup.number().required("Provide index number!"),
  parentName: yup.string().required("Enter parent's name!"),
  parentContact: yup.string().required("Enter parent's contact!"),
});
