import axios from "axios";

export const DestroyTodo = () => {
  const FuncDestroyTodo = (id?: number) => {
    axios
      .delete(`http://localhost:4000/todos/${id}`)
      .catch((error) => console.log(error))
      .finally(() => window.location.reload());
    return console.log("destroy done");
  };

  return { FuncDestroyTodo };
};
