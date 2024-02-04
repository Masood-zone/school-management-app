import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("studentFullName", {
    header: "Student Name",
  }),
  columnHelper.accessor("description", {
    header: "Description",
  }),
  columnHelper.accessor("date", {
    header: "Date",
  }),
  columnHelper.accessor("amountPaid", {
    header: "Amount Paid",
  }),
];

export default columns;
