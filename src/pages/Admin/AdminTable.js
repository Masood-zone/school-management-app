import React, { useEffect, useState } from "react";
import Table from "../../components/tables/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdmin,
  getAdminList,
} from "../../appRedux/slice/admins/adminFxn";
import Spinner from "../../components/spinner";
import { resetData } from "../../appRedux/slice/admins/adminSlice";
import { toast } from "react-toastify";
import columns from "./data";
import { useNavigate } from "react-router-dom";

function AdminTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { loading, adminList } = useSelector((state) => state.admins);

  // Fetch admin list
  useEffect(() => {
    dispatch(getAdminList()).then(() => {
      dispatch(resetData());
    });
  }, []);
  useEffect(() => {
    if (adminList) {
      setData(adminList);
    }
  }, [adminList]);
  // Edit function
  const handleEdit = (data) => {
    if (data) {
      navigate(`/edit-admin/${data.id}`);
    } else {
      const notice = toast.error("Make sure to select the right Admin.");
      return notice;
    }
  };
  // Delete function
  const handleDelete = (id) => {
    const newList = data.filter((admin) => admin.id !== id);
    setData(newList);
    dispatch(deleteAdmin(id));
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

export default AdminTable;
