import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../appRedux/slice/payments/paymentFxn";
import { reset } from "../../appRedux/slice/payments/paymentSlice";
import { toast } from "react-toastify";
import { createPaymentSchema } from "../../schemas/paymentSchema";
import { getStudentList } from "../../appRedux/slice/students/studentsFxn";
import moment from "moment";
import Spinner from "../../components/spinner";
import Forms from "../../components/forms";

function NewPayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.payments);
  const { studentList } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(getStudentList());
  }, []);
  // Students details
  const studentOptions = studentList.map((student) => ({
    label: student.studentFullName,
    value: student.indexNumber,
  }));
  // Form submission
  const handleSubmit = (values, { resetForm }) => {
    const formatedDate = moment(values.date).format("YYYY-MM-DD");
    const selectedStudent = studentList.find(
      (student) => student.indexNumber === values.students
    );
    const paymentData = {
      studentFullName: selectedStudent.studentFullName,
      studentid: values.students,
      description: values.description,
      Date: formatedDate,
      amountPaid: values.amountPaid,
    };
    dispatch(register(paymentData)).then(() => {
      dispatch(reset());
      resetForm();
    });
  };
  // Payment Data
  const paymentData = [
    {
      label: "Students",
      name: "students",
      type: "select",
      options: studentOptions,
    },
    {
      label: "Description",
      name: "description",
      type: "text",
    },
    {
      label: "Date",
      name: "date",
      type: "date",
    },
    {
      label: "Amount Paid",
      name: "amountPaid",
      type: "number",
    },
  ];
  // UseEffect
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
          <Forms
            data={paymentData}
            onSubmit={handleSubmit}
            schema={createPaymentSchema}
            btnTitle="Create Record"
          />
        )}
      </div>
    </div>
  );
}

export default NewPayment;
