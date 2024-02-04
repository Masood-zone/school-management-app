import React from "react";
import Header from "../../components/header";
import PaymentList from "./PaymentList";

function Payments() {
  const payment_pages = [
    {
      id: 1,
      path: "Setup Payment",
      link: "/new-payment",
    },
  ];
  return (
    <div className="flex flex-col gap-10 p-2">
      {/* Payments Header */}
      <div className="max-md:mb-32">
        <Header
          title="Payment Section"
          notes="Setup a new payment record, edit one and have it all displayed for you."
          data={payment_pages}
        />
      </div>
      {/* Payments routes */}
      <div className="px-3">
        <PaymentList />
      </div>
    </div>
  );
}

export default Payments;
