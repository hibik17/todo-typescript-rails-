import React, { useEffect } from "react";
import { GetTodos } from "../hooks/GetTodos";
import { TodoCard } from "../Molecules/TodoCard";
import { Header } from "../Templates/Header";

import { Sidebar } from "../Templates/Sidebar";

export const CompletedTask = () => {
  const { getData, todos } = GetTodos();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="md:flex w-full h-full">
        <div className="w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-10">
          <div className="container md:mx-36 lg:flex lg:flex-wrap">
            {todos?.map((todo, index) => {
              return <TodoCard key={index} todo={todo} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
