import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CreateTodoType } from "../Types/CreateTodoType";

export const CreateTodo = () => {
  const navigate = useNavigate();
  const FuncCreateTodo = async (data: CreateTodoType) => {
    await axios
      .post("http://localhost:4000/todos", {
        title: data.title,
        body: data.body,
      })
      .catch((error) => console.log(error.status))
      .finally(() => {
        navigate("/uncompleted_todo");
      });
  };

  return { FuncCreateTodo };
};
