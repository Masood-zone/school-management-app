import { useFormik } from "formik";
import React, { useState } from "react";
import eyesOpened from "../../assets/svgs/eyes-open.svg";
import eyesClosed from "../../assets/svgs/eyes-closed.svg";

function Forms({ data, schema, btnTitle, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: data.reduce((acc, val) => {
      acc[val.name] = "";
      return acc;
    }, {}),
    validationSchema: schema,
    onSubmit: onSubmit,
  });

  const handlePasswordView = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full mx-auto"
    >
      {/* Main Form section */}
      {data.map((input) =>
        input.type !== "select" && input.type !== "password" ? (
          <div key={input.label}>
            <div className="flex flex-col my-1">
              <label htmlFor={input.label} className="font-medium capitalize">
                {input.label}
              </label>

              <input
                type={input.type}
                placeholder={input.placeholder}
                className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
                  formik.touched[input.name] && formik.errors[input.name]
                    ? "border-[#fc030b] border-2"
                    : ""
                }`}
                {...formik.getFieldProps(input.name)}
              />

              {formik.touched[input.name] && formik.errors[input.name] && (
                <span className="text-red-500">
                  {formik.errors[input.name]}
                </span>
              )}
            </div>
          </div>
        ) : null
      )}

      {/* Password section */}
      {data.map((input) =>
        input.type === "password" ? (
          <div key={input.label}>
            <label htmlFor={input.label} className="font-medium capitalize">
              {input.label}
            </label>
            <PasswordViewer
              key={input.label}
              value={formik.values[input.name]}
              onChange={formik.handleChange(input.name)}
              onBlur={formik.handleBlur(input.name)}
              show={showPassword}
              formik={formik}
              input={input}
              toggleVisibility={handlePasswordView}
              placeholder={input.placeholder}
            />
          </div>
        ) : null
      )}
      {/* Select section */}
      {data.map((input) =>
        input.type === "select" ? (
          <div key={input.label} className="flex flex-col w-full">
            <label
              htmlFor={input.label}
              className="my-1 font-medium capitalize"
            >
              {input.label}
            </label>
            <select
              id={input.label}
              name={input.name}
              value={formik.values[input.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Select gender"
              className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
                formik.touched[input.name] && formik.errors[input.name]
                  ? "border-[#fc030b] border-2"
                  : ""
              }`}
            >
              <option value=""></option>
              {input.options.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        ) : null
      )}
      <div className="w-full mt-2">
        <button
          className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
          type="submit"
        >
          {btnTitle}
        </button>
      </div>
    </form>
  );
}

export default Forms;

function PasswordViewer({
  show,
  formik,
  label,
  value,
  onChange,
  onBlur,
  toggleVisibility,
  placeholder,
  input,
}) {
  return (
    <div className="flex flex-col w-full my-1 relative">
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
          formik.touched[input.name] && formik.errors[input.name]
            ? "border-[#fc030b] border-2"
            : ""
        }`}
      />
      <label
        htmlFor={label}
        role="button"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onClick={toggleVisibility}
        placeholder={placeholder}
        className="font-medium absolute right-0 top-2 p-2"
      >
        {show ? (
          <img src={eyesOpened} alt="eyes-open-icon" />
        ) : (
          <img src={eyesClosed} alt="eyes-closed-icon" />
        )}
      </label>
    </div>
  );
}
