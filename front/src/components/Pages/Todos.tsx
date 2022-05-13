import { memo, FC, useEffect } from "react";

import { GetTodos } from "../hooks/GetTodos";
import { TodoCard } from "../Molecules/TodoCard";
import { Header } from "../Organisms/Header";
import { Sidebar } from "../Organisms/Sidebar";
import { Layout } from "../Templates/Layout";

export const Todos: FC = memo(() => {
  const { getData, todos } = GetTodos();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="flex row w-full h-full">
        <div className="w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-10">
          <div className="container md:mx-36 lg:flex lg:flex-wrap">
            {todos?.map((todo, index) => {
              return <TodoCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
