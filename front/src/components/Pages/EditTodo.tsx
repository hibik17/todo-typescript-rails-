import React, { FC, memo, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { GetTodo } from "../hooks/GetTodo";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../Molecules/Form";
import { Sidebar } from "../Templates/Sidebar";
import { Header } from "../Templates/Header";
import { EditForm } from "../Molecules/EditForm";

interface IFormInput {
  firstName: String;
  lastName: string;
  age: number;
}

export const EditTodo: FC = memo((props) => {
  const params = useParams<{ id: string }>();
  const { ShowTodo, todo } = GetTodo();

  useEffect(() => ShowTodo(params.id), []);

  console.log(todo);
  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="md:flex md:row w-full h-full">
        <div className="w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-10">
          <div className="animate-in slide-in-from-right">
            <div className="text-center text-3xl font-semibold font-mono mt-5 ">
              Edit your todo
            </div>
            <div className="flex items-center justify-center">
              <EditForm todo={todo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
