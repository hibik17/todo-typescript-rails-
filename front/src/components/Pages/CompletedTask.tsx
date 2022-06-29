import React, { useEffect } from "react";
import { FcCollapse } from "react-icons/fc";
import { GetTodos } from "../hooks/GetTodos";
import { Scroll } from "../hooks/Scroll";
import { TodoCard } from "../Molecules/TodoCard";
import { Header } from "../Templates/Header";
import { ScrollTop } from "../hooks/ScrollTop";
import { Sidebar } from "../Templates/Sidebar";

export const CompletedTask = () => {
  const { getData, todos } = GetTodos();

  // detect the scroll event
  const { scrollY, setScrooled, is_scrolled } = Scroll();
  useEffect(() => {
    if (scrollY > 50) {
      setScrooled(true);
    } else {
      setScrooled(false);
    }
  });

  // import scroll to the top function
  const { ScrollToTop } = ScrollTop();

  useEffect(() => {
    getData("completed_todos");
  }, []);

  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="md:flex w-full h-full">
        <div className="md:w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="md:w-4/5 mt-10">
          <div className="container flex flex-wrap justify-items-start">
            {todos?.map((todo, index) => {
              return <TodoCard key={index} todo={todo} />;
            })}
          </div>
        </div>
      </div>
      {is_scrolled && (
        <FcCollapse
          className="w-10 h-10 hover:scale-75 mx-12 fixed bottom-6 overflow-y-scroll"
          onClick={ScrollToTop}
        />
      )}
    </div>
  );
};
