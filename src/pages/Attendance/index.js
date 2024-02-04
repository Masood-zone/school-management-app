import React from "react";
import Header from "../../components/header";

function Attendance() {
  const attendance_pages = [
    {
      id: 1,
      path: "Mark Attendance",
      link: "/mark-attendance",
    },
  ];
  return (
    <div className="flex flex-col gap-10 p-2">
      {/* Attendance Header */}
      <div className="max-md:mb-32">
        <Header
          title="Attendance Section"
          notes="Keep track of those who are present and those who are absent in the group."
          data={attendance_pages}
        />
      </div>
      {/* Attendance routes */}
      <div className="px-3"></div>
    </div>
  );
}

export default Attendance;
