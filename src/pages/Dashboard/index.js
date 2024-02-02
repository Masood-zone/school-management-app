import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetData } from "../../appRedux/slice/admins/adminSlice";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetData());
  }, [dispatch]);

  return <div>Dashboard</div>;
}

export default Dashboard;
