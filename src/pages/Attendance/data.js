import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("studentid", {
    header: "Student ID",
  }),
  columnHelper.accessor("studentName", {
    header: "Student Name",
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: ({ row }) => {
      const date = row.original.date;
      const formatedDate = moment(date).format("YYYY-MM-DD");
      return formatedDate;
    },
  }),
  columnHelper.accessor("attendanceStatus", {
    header: "Status",
  }),
];
