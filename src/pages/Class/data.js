import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("className", {
    header: "Class Name",
  }),
  columnHelper.accessor("classTeacherName", {
    header: "Class Teacher",
  }),
];

export const createClassData = [
  {
    label: "className",
    name: "className",
    placeholder: "Enter class name",
  },
  {
    label: "classTeacherName",
    name: "classTeacherName",
    placeholder: "Enter class teacher name",
  },
];
