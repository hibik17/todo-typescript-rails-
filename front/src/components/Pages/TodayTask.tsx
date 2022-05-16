import React, { useEffect } from "react";
import { GetTodos } from "../hooks/GetTodos";
import { TodoCard } from "../Molecules/TodoCard";
import { Header } from "../Templates/Header";
import { FcCollapse } from "react-icons/fc";

import { Sidebar } from "../Templates/Sidebar";
import { Scroll } from "../hooks/Scroll";
import { ScrollTop } from "../hooks/ScrollTop";

export const TodayTask = () => {
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

  // fetch data from backend
  useEffect(() => {
    getData("uncompleted_todos");
  }, []);

  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="md:flex w-full h-full">
        <div className="md:w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="md:w-4/5 mt-10">
          <div className="container">
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
