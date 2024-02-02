import React from "react";

function EditForm({ formik }) {
  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex-col my-1">
      <div className="flex flex-col my-1">
        <label htmlFor="fullName" className="font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          className="bg-gray-200 py-3 px-2 mt-1 rounded-md "
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col my-1">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="bg-gray-200 py-3 px-2 mt-1 rounded-md "
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col my-1">
        <label htmlFor="phoneNumber" className="font-medium">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNumber"
          className="bg-gray-200 py-3 px-2 mt-1 rounded-md "
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
        />
      </div>
      <button
        className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}

export default EditForm;
