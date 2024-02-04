import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deletePayment,
  getPaymentList,
} from "../../appRedux/slice/payments/paymentFxn";
import { reset } from "../../appRedux/slice/payments/paymentSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import Table from "../../components/tables/Table";
import columns from "./data";

function PaymentList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const { loading, paymentList } = useSelector((state) => state.payments);
  // Fetch admin list
  useEffect(() => {
    dispatch(getPaymentList()).then(() => {
      dispatch(reset());
    });
  }, []);
  useEffect(() => {
    if (paymentList) {
      setData(paymentList);
    }
  }, [paymentList]);
  // Edit function
  const handleEdit = (data) => {
    if (data) {
      navigate(`/edit-payment/${data.id}`);
    } else {
      const notice = toast.error("Make sure to select the right record.");
      return notice;
    }
  };
  // Delete function
  const handleDelete = (id) => {
    const newList = data.filter((payment) => payment.id !== id);
    setData(newList);
    dispatch(deletePayment(id));
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Table
          data={data}
          columns={columns}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default PaymentList;
