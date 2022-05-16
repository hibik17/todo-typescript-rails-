import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompletedTask } from "./components/Pages/CompletedTask";
import { Document } from "./components/Pages/Document";
import { NewTodo } from "./components/Pages/NewTodo";
import { NotFound } from "./components/Pages/NotFound";
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
        <Route path="/document" element={<Document />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});
