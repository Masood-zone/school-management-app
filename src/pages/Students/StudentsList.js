import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteStudent,
  getStudentList,
} from "../../appRedux/slice/students/studentsFxn";
import { resetData } from "../../appRedux/slice/students/studentsSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import Table from "../../components/tables/Table";
import columns from "./data";

function StudentsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { loading, studentList } = useSelector((state) => state.students);

  // Fetch students list
  useEffect(() => {
    dispatch(getStudentList()).then(() => {
      dispatch(resetData());
    });
  }, []);
  useEffect(() => {
    if (studentList) {
      setData(studentList);
    }
  }, [studentList]);
  // Edit student
  const handleEdit = (data) => {
    if (data) {
      navigate(`/edit-student/${data.id}`);
    } else {
      const notice = toast.error("Make sure to select the right student.");
      return notice;
    }
  };
  // Delete function
  const handleDelete = (id) => {
    const newList = data.filter((student) => student.id !== id);
    setData(newList);
    dispatch(deleteStudent(id));
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Table
          data={data}
          columns={columns}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default StudentsList;
