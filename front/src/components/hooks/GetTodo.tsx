import axios from "axios";
import React, { useCallback, useState } from "react";
import { TodoType } from "../Types/TodoType";

export const GetTodo = () => {
  // maintain the todo info
  const [todo, setTodo] = useState<TodoType>();

  // get todo's info from id
  const ShowTodo = useCallback((id?: string | number) => {
    axios
      .get<TodoType>(`http://localhost:4000/todos/${id}`)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        console.log("data get action was finished");
      });
  }, []);

  return { ShowTodo, todo };
};
