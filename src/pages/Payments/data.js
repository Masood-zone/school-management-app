import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

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
    cell: ({ row }) => {
      const date = row.original.date;
      const formatedDate = moment(date).format("YYYY-MM-DD");
      return formatedDate;
    },
  }),
  columnHelper.accessor("amountPaid", {
    header: "Amount Paid",
  }),
];

export default columns;
