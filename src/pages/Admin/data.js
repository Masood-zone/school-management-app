import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("fullName", {
    header: "Full Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("phoneNumber", {
    header: "Phone Number",
  }),
];

export const adminRegisterData = [
  {
    label: "fullname",
    name: "fullname",
    placeholder: "Enter Full Name",
    type: "text",
  },
  {
    label: "email",
    name: "email",
    placeholder: "yourname@example.com",
    type: "email",
  },
  {
    label: "telephone",
    name: "telephone",
    placeholder: "050000000",
    type: "text",
  },
  {
    label: "password",
    name: "password",
    placeholder: "Enter Password",
    type: "password",
  },
  {
    label: "confirmPwd",
    name: "confirmPwd",
    placeholder: "Confirm Password",
    type: "password",
  },
];
