import React from "react";
import Header from "../../components/header";
import ClassList from "./ClassList";

function Class() {
  const class_pages = [
    {
      id: 1,
      path: "Create a Class",
      link: "/new-class",
    },
  ];
  return (
    <div>
      {/* Class Header */}
      <div className="max-md:mb-32">
        <Header
          title="Class Section"
          notes="Here you can create, assign and then update class information."
          data={class_pages}
        />
      </div>

      {/* Class Routes */}
      <div className="px-3">
        <ClassList />
      </div>
    </div>
  );
}

export default Class;
