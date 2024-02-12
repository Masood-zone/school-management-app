import React from "react";
import Header from "../../components/header";
import AdminTable from "./AdminTable";
import PasswordViewer from "../../_tests_/forms/password";

function Admin() {
  const admin_pages = [
    {
      id: 1,
      path: "Create an Admin",
      link: "/new-admin",
    },
  ];
  return (
    <div className="flex flex-col gap-10 p-2">
      {/* Admin Header */}
      <div className="max-md:mb-32">
        <Header
          title="Admin Section"
          notes="Welcome to Kirito Group of Companies, we deal with making sure that
          your records are kept safe and secure and are created, edited, and
          updated with ease."
          data={admin_pages}
        />
      </div>
      {/* Admin routes */}
      <div className="px-3">
        <AdminTable />
      </div>
    </div>
  );
}

export default Admin;
