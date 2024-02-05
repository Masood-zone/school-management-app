import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../appRedux/slice/payments/paymentFxn";
import { reset } from "../../appRedux/slice/payments/paymentSlice";
import { toast } from "react-toastify";
import { createPaymentSchema } from "../../schemas/paymentSchema";
import { getStudentList } from "../../appRedux/slice/students/studentsFxn";
import moment from "moment";
import Spinner from "../../components/spinner";

function NewPayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [student, setStudent] = useState(null);
  const { loading, success, error } = useSelector((state) => state.payments);
  const { studentList } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(getStudentList());
  }, []);
  // Students details
  const studentOptions = studentList.map((student) => ({
    label: student.studentFullName,
    value: student.id,
  }));
  // Form submission
  const formik = useFormik({
    initialValues: {
      description: "",
      date: "",
      amountPaid: "",
    },
    validationSchema: createPaymentSchema,
    onSubmit: (values, { resetForm }) => {
      const formatedDate = moment(values.date).format("YYYY-MM-DD");
      const paymentData = {
        studentFullName: student.label,
        studentsId: student.value,
        description: values.description,
        date: formatedDate,
        amountPaid: values.amountPaid,
      };
      dispatch(register(paymentData)).then(() => {
        dispatch(reset());
        resetForm();
      });
    },
  });
  useEffect(() => {
    if (!loading && success) {
      navigate("/payments");
      toast.success("Payment setup successfully!");
    }
    if (error) {
      toast.error(error);
    }
  }, [loading, error, success, navigate]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto">
      <div className="card-body">
        {/* Header */}
        <h2 className="card-title">Payment Record</h2>
        <p>
          Create a Record
          <Link to="/payments" className="px-5 underline hover:text-blue-500">
            Go Back
          </Link>
        </p>
        {/* Form */}
        {loading ? (
          <Spinner />
        ) : (
          <form className="flex flex-col w-full" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-1">
              <label htmlFor="studentFullName" className="font-medium">
                Student Full Name
              </label>
              <Select
                options={studentOptions}
                onChange={(student) => setStudent(student)}
              />
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="description" className="font-medium">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description..."
                className="bg-gray-200 py-3 px-2 mt-1 rounded-md"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="date" className="font-medium">
                Date
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date here..."
                className="bg-gray-200 py-3 px-2 mt-1 rounded-md"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="amountPaid" className="font-medium">
                Amount Paid
              </label>
              <input
                type="number"
                name="amountPaid"
                placeholder="Amount..."
                className="bg-gray-200 py-3 px-2 mt-1 rounded-md"
                value={formik.values.amountPaid}
                onChange={formik.handleChange}
              />
            </div>
            <button
              className="text-white bg-[#3A36DB] w-full py-3 rounded-md my-5"
              type="submit"
            >
              Create Record
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default NewPayment;
