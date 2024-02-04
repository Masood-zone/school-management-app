import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("studentFullName", {
    header: "Full Name",
  }),
  columnHelper.accessor("index", {
    header: "Index Number",
  }),
  columnHelper.accessor("age", {
    header: "Age",
  }),
  columnHelper.accessor("dob", {
    header: "Date of Birth",
  }),
  columnHelper.accessor("parentFullName", {
    header: "Parent Name",
  }),
  columnHelper.accessor("parentContact", {
    header: "Parent Contact",
  }),
];

export default columns;
