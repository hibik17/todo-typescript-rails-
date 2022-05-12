import React from "react";

export const Form = () => {
  return (
    <form className="w-full max-w-sm m-auto mt-32">
      {/* todolist title form */}
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="task title"
          aria-label="Full name"
        />
      </div>
      {/* todolist content form */}
      <div className="flex items-center border-b border-teal-500 py-2 mt-16">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="task content"
          aria-label="Full name"
        />
      </div>
      {/* Add task button */}
      <div className="flex items-center mx-auto mt-16 ">
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Add task
        </button>
        {/* Back button */}
        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Back
        </button>
      </div>
    </form>
  );
};
