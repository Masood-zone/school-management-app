import React from "react";
import { Link } from "react-router-dom";

function LoginForm({ formik }) {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full mx-auto "
    >
      <div className="flex flex-col my-2">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          placeholder="example@gmail.com"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.email && formik.errors.email
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-[#fc030b]">{formik.errors.email}</span>
        )}
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder=""
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.password && formik.errors.password
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.password && formik.errors.password && (
        <span className="text-[#fc030b]">{formik.errors.password}</span>
      )}
      <div className="w-full mt-2">
        <button
          className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
          type="submit"
        >
          Log in
        </button>
        <p className="">
          <span className="font-medium">Don't have account yet?</span>
          <Link className="text-[#3A36DB] font-bold px-2" to="/signup">
            New Account
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
