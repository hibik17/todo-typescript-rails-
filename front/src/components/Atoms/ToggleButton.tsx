import React, { useEffect, useState } from "react";

export const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  const [status, setStatus] = useState("");

  const toggleClass = " transform translate-x-8";

  useEffect(() => {
    if (toggle === true) {
      setStatus("bg-red-500");
    } else if (toggle === false) {
      setStatus("bg-green-500");
    }
  }, [toggle]);

  return (
    <>
      <div className="flex flex-col h-10 justify-center items-center ">
        {/*   Switch Container */}

        <div
          className={`md:w-16 md:h-7 w-12 h-6 flex items-center rounded-full p-1 ${status} cursor-pointer`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={
              "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-500 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          />
        </div>
      </div>
    </>
  );
};
