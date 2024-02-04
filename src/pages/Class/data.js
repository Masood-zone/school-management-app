import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("className", {
    header: "Class Name",
  }),
  columnHelper.accessor("classTeacherName", {
    header: "Class Teacher",
  }),
];

export default columns;
