import React, { memo } from "react";
import { Form } from "../Molecules/Form";
import { Header } from "../Templates/Header";
import { Sidebar } from "../Templates/Sidebar";

export const NewTodo = memo(() => {
  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="md:flex md:row w-full h-full">
        <div className="w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-10">
          <div className="animate-in slide-in-from-right">
            <div className="text-center text-3xl font-semibold font-mono mt-16 ">
              Add New Task!
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
});
