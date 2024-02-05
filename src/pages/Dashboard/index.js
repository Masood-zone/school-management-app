import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../../appRedux/slice/admins/adminSlice";
import AnalyticCard from "../../components/cards/analyticCard";
import { getAdminList } from "../../appRedux/slice/admins/adminFxn";
import { getStudentList } from "../../appRedux/slice/students/studentsFxn";
import { getAllClasses } from "../../appRedux/slice/class/classFxn";
import { getPaymentList } from "../../appRedux/slice/payments/paymentFxn";
import adminAnalytic from "../../assets/svgs/admin-analytic.svg";
import studentAnalytic from "../../assets/svgs/students-analytic.svg";
import paymentAnalytics from "../../assets/svgs/payment-analytics.svg";
import classAnalytics from "../../assets/svgs/class-analytics.svg";

function Dashboard() {
  const dispatch = useDispatch();
  // Selector for all the sections of the app
  const { adminList } = useSelector((state) => state.admins);
  const { studentList } = useSelector((state) => state.students);
  const { classList } = useSelector((state) => state.classes);
  const { paymentList } = useSelector((state) => state.payments);
  useEffect(() => {
    dispatch(getAdminList());
    dispatch(getStudentList());
    dispatch(getAllClasses());
    dispatch(getPaymentList());
    dispatch(resetData());
  }, []);

  const totalAmountPaid = paymentList.reduce((acc, payment) => {
    return acc + payment.amountPaid;
  }, 0);
  return (
    <div className="p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="">
        <h1 className="font-bold text-2xl">Dashboard</h1>
      </div>
      {/* Top cards (Admins, )*/}
      <div className="w-full flex flex-wrap items-center gap-10">
        <AnalyticCard
          image={adminAnalytic}
          path="/admin"
          data={adminList}
          linkTitle="Admins"
        />
        <AnalyticCard
          image={studentAnalytic}
          path="/students"
          data={studentList}
          linkTitle="Students"
        />
        <AnalyticCard
          image={paymentAnalytics}
          path="/payments"
          data={totalAmountPaid}
          linkTitle="Payments"
        />
        <AnalyticCard
          image={classAnalytics}
          path="/class"
          data={classList}
          linkTitle="Classes"
        />
      </div>
    </div>
  );
}

export default Dashboard;
