import { FC, memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompletedTask } from "./components/Pages/CompletedTask";
import { Document } from "./components/Pages/Document";
import { NewTodo } from "./components/Pages/NewTodo";
import { NotFound } from "./components/Pages/NotFound";
import { TodayTask } from "./components/Pages/TodayTask";
import { Todos } from "./components/Pages/Todos";

const routes = [
  { path: "/newtodo", element: <NewTodo /> },
  { path: "/today_todo", element: <TodayTask /> },
  { path: "/completed_todo", element: <CompletedTask /> },
  { path: "/document", element: <Document /> },
  { path: "/todos", element: <Todos /> },
  { path: "*", element: <NotFound /> },
];

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Todos />} />
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
});
