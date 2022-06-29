import axios from "axios";
import { useCallback, useState } from "react";
import { TodoType } from "../Types/TodoType";

export const GetTodos = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const getData = useCallback(async (path: string) => {
    await axios
      .get<Array<TodoType>>(`http://localhost:4000/${path}`)
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        console.log("data get action was finished");
      });
  }, []);

  return { getData, todos };
};
