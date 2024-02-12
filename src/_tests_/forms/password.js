import React, { useState } from "react";
import eyesOpened from "../../assets/svgs/eyes-open.svg";
import eyesClosed from "../../assets/svgs/eyes-closed.svg";

function PasswordViewer() {
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col w-full my-1 relative">
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        className="bg-gray-200 py-3 px-2 mt-1 rounded-md"
      />
      <label
        htmlFor="password"
        role="button"
        onClick={handleSubmit}
        className="font-medium absolute right-0 top-2 p-2"
      >
        {show ? (
          <img src={eyesOpened} alt="eyes-open-icon" />
        ) : (
          <img src={eyesClosed} alt="eyes-closed-icon" />
        )}
      </label>
    </div>
  );
}

export default PasswordViewer;
