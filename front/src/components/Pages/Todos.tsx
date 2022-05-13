import { memo, FC, useEffect } from "react";

import { GetTodos } from "../hooks/GetTodos";
import { TodoCard } from "../Molecules/TodoCard";
import { Layout } from "../Templates/Layout";

export const Todos: FC = memo(() => {
  const { getData, todos } = GetTodos();

  useEffect(() => {
    getData();
  }, []);

  return <Layout children={<TodoCard />} />;
});
