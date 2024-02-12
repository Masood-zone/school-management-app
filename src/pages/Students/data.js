import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("studentFullName", {
    header: "Full Name",
  }),
  columnHelper.accessor("indexNumber", {
    header: "Index Number",
  }),
  columnHelper.accessor("age", {
    header: "Age",
  }),
  columnHelper.accessor("dob", {
    header: "Date of Birth",
    cell: ({ row }) => {
      const dob = row.original.dob;
      const formatedDob = moment(dob).format("YYYY-MM-DD");
      return formatedDob;
    },
  }),
  columnHelper.accessor("parentFullName", {
    header: "Parent Name",
  }),
  columnHelper.accessor("parentContact", {
    header: "Parent Contact",
  }),
];

export default columns;
