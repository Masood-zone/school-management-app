import React from "react";
import Header from "../../components/header";
import StudentsList from "./StudentsList";

function Students() {
  const students_pages = [
    {
      id: 1,
      path: "Create a Student",
      link: "/new-student",
    },
  ];
  return (
    <div>
      {/* Student Header */}
      <div className="max-md:mb-32">
        <Header
          title="Student Section"
          notes="Here you can create, assign and then update students information."
          data={students_pages}
        />
      </div>

      {/* Students Routes */}
      <div className="px-3">
        <StudentsList />
      </div>
    </div>
  );
}

export default Students;
