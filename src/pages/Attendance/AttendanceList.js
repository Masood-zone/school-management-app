import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allAttendance } from "../../appRedux/slice/attendance/attendanceFxn";
import { resetData } from "../../appRedux/slice/attendance/attendanceSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import Table from "../../components/tables/Table";
import { columns } from "./data";

function AttendanceList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const { loading, attendanceList } = useSelector((state) => state.attendances);
  // Fetch and set attendance
  useEffect(() => {
    dispatch(allAttendance()).then(() => {
      dispatch(resetData());
    });
  }, []);
  useEffect(() => {
    if (attendanceList) {
      setData(attendanceList);
    }
  }, [attendanceList]);
  // Edit function
  const handleEdit = (data) => {
    if (data) {
      navigate(`/edit-attendance/${data.id}`);
    } else {
      const notice = toast.error("Make sure to select the right record.");
      return notice;
    }
  };
  // Delete function
  const handleDelete = (id) => {
    const newList = data.filter((admin) => admin.id !== id);
    setData(newList);
  };

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Table
            data={data}
            columns={columns}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default AttendanceList;
