import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../../appRedux/slice/class/classSlice";
import { useNavigate } from "react-router-dom";
import {
  deleteClass,
  getAllClasses,
} from "../../appRedux/slice/class/classFxn";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import Table from "../../components/tables/Table";
import columns from "./data";

function ClassList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { loading, classList } = useSelector((state) => state.classes);

  useEffect(() => {
    dispatch(getAllClasses()).then(() => {
      dispatch(resetData());
    });
  }, []);
  useEffect(() => {
    if (classList) {
      setData(classList);
    }
  }, [classList]);
  // Edit function
  const handleEdit = (data) => {
    if (data) {
      navigate(`/edit-class/${data.id}`);
    } else {
      const notice = toast.error("Make sure to select the right Class.");
      return notice;
    }
  };
  // Delete function
  const handleDelete = (id) => {
    const newList = data.filter((classes) => classes.id !== id);
    setData(newList);
    dispatch(deleteClass(id));
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

export default ClassList;
