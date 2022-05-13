import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewTodo } from "./components/Pages/NewTodo";
import { Todos } from "./components/Pages/Todos";

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Todos />} />
        <Route path="todos" element={<Todos />} />
        <Route path="newtodo" element={<NewTodo />} />
      </Routes>
    </BrowserRouter>
  );
});
