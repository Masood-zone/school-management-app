import React from "react";
import { Link } from "react-router-dom";

function SignupForm({ formik }) {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full mx-auto scale-90"
    >
      <div className="flex flex-col my-1">
        <label htmlFor="fullname" className="font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          placeholder="John Doe"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.fullname && formik.errors.fullname
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullname && formik.errors.fullname && (
          <span className="text-[#fc030b]">{formik.errors.fullname}</span>
        )}
      </div>
      <div className="flex flex-col my-1">
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
      <div className="flex flex-col my-1">
        <label htmlFor="telephone" className="font-medium">
          Phone Number
        </label>
        <input
          type="text"
          name="telephone"
          placeholder="Phone number"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.telephone && formik.errors.telephone
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.telephone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.telephone && formik.errors.telephone && (
          <span className="text-[#fc030b]">{formik.errors.telephone}</span>
        )}
      </div>
      <div className="flex flex-col my-1">
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
      <div className="flex flex-col my-1">
        <label htmlFor="confirm" className="font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPwd"
          placeholder=""
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.confirmPwd && formik.errors.confirmPwd
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.confirmPwd}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.confirmPwd && formik.errors.confirmPwd && (
        <span className="text-[#fc030b]">{formik.errors.confirmPwd}</span>
      )}
      <div className="w-full mt-2">
        <button
          className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
          type="submit"
        >
          Create Account
        </button>
        <p className="">
          <span className="font-medium">Already have an Account?</span>
          <Link className="text-[#3A36DB] font-bold px-2" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
