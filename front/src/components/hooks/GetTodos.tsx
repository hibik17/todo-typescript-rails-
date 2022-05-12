import axios from "axios";
import { useCallback, useState } from "react";
import { TodoType } from "../Types/TodoType";

export const GetTodos = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const getData = useCallback(() => {
    axios
      .get<Array<TodoType>>("http://localhost:4000/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        console.log("data get action was finished");
      });
  }, [todos]);

  return { getData, todos };
};
