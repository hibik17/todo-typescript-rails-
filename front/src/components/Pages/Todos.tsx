import { FC, useEffect } from "react";

import { GetTodos } from "../hooks/GetTodos";

export const Todos: FC = () => {
  const { getData, todos } = GetTodos();

  useEffect(() => {
    getData();
  }, [todos]);

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.body}</li>
            {todo.is_completed && <li>true</li>}
            {todo.is_completed || <li>false</li>}
          </ul>
        );
      })}
    </>
  );
};
