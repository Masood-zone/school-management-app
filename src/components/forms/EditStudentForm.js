import React from "react";
import Select from "react-select";

function EditStudentForm({
  formik,
  genderOptions,
  classOptions,
  setSelectedGender,
  setSelectedClass,
}) {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full mx-auto"
    >
      {/* Full Name */}
      <div className="flex flex-col my-1">
        <label htmlFor="fullname" className="font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          placeholder="Enter full name"
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
      {/* Index Number */}
      <div className="flex flex-col my-1">
        <label htmlFor="indexNumber" className="font-medium">
          Index Number (52210--)
        </label>
        <input
          type="text"
          name="indexNumber"
          placeholder=""
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.indexNumber && formik.errors.indexNumber
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.indexNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.indexNumber && formik.errors.indexNumber && (
          <span className="text-[#fc030b]">{formik.errors.indexNumber}</span>
        )}
      </div>
      {/* Gender */}
      <div className="flex flex-col my-1">
        <label htmlFor="gender" className="font-medium">
          Gender
        </label>
        <Select
          className="w-full"
          options={genderOptions}
          onChange={(gender) => setSelectedGender(gender.value)}
        />
      </div>
      {/* Class */}
      <div className="flex flex-col my-1">
        <label htmlFor="gender" className="font-medium">
          Class
        </label>
        <Select
          className="w-full"
          options={classOptions}
          onChange={(stdClass) => setSelectedClass(stdClass.value)}
        />
      </div>
      {/* Age */}
      <div className="flex flex-col my-1">
        <label htmlFor="age" className="font-medium">
          Age
        </label>
        <input
          type="number"
          name="age"
          placeholder="Your age here"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.age && formik.errors.age
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age && (
          <span className="text-[#fc030b]">{formik.errors.age}</span>
        )}
      </div>
      {/* Date of Birth */}
      <div className="flex flex-col my-1">
        <label htmlFor="dob" className="font-medium">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.dob && formik.errors.dob
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.dob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.dob && formik.errors.dob && (
          <span className="text-[#fc030b]">{formik.errors.dob}</span>
        )}
      </div>
      {/* Parent Name */}
      <div className="flex flex-col my-1">
        <label htmlFor="parentName" className="font-medium">
          Parent Name
        </label>
        <input
          type="text"
          name="parentName"
          placeholder="Your parent Name"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.parentName && formik.errors.parentName
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.parentName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.parentName && formik.errors.parentName && (
          <span className="text-[#fc030b]">{formik.errors.parentName}</span>
        )}
      </div>
      {/* Parent Contact */}
      <div className="flex flex-col my-1">
        <label htmlFor="parentContact" className="font-medium">
          Parent Contact
        </label>
        <input
          type="text"
          name="parentContact"
          placeholder="Your parent Name"
          className={`bg-gray-200 py-3 px-2 mt-1 rounded-md ${
            formik.touched.parentContact && formik.errors.parentContact
              ? "border-[#fc030b] border-2"
              : ""
          }`}
          value={formik.values.parentContact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.parentContact && formik.errors.parentContact && (
          <span className="text-[#fc030b]">{formik.errors.parentContact}</span>
        )}
      </div>
      {/* Button */}
      <button
        className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}

export default EditStudentForm;
