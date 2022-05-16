import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompletedTask } from "./components/Pages/CompletedTask";
import { NewTodo } from "./components/Pages/NewTodo";
import { TodayTask } from "./components/Pages/TodayTask";
import { Todos } from "./components/Pages/Todos";

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Todos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/newtodo" element={<NewTodo />} />
        <Route path="/today_todo" element={<TodayTask />} />
        <Route path="/completed_todo" element={<CompletedTask />} />
      </Routes>
    </BrowserRouter>
  );
});
