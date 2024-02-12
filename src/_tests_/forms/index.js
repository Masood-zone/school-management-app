import React from "react";
import { useFormik } from "formik";
function FormTest() {
  const formData = [
    {
      label: "Full Name",
      name: "fullname",
      placeholder: "Enter fullname",
      type: "text",
      value: "",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter Email",
      type: "email",
      value: "",
    },
    {
      label: "Password",
      name: "Password",
      placeholder: "Enter Password",
      type: "password",
      value: "",
    },
  ];
  const formik = useFormik({
    initialValues: formData.reduce((acc, val) => {
      acc[val.name] = "";
      return acc;
    }, {}),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted!");
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {formData.map((input) => (
          <div className="flex flex-col my-3" key={input.label}>
            <label>{input.label}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              className="input input-bordered"
              {...formik.getFieldProps(input.name)}
            />
            {formik.touched[input.name] && formik.errors[input.name] && (
              <span className="text-red-500">{formik.errors[input.name]}</span>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormTest;
