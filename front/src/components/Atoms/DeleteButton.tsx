import { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { DestroyTodo } from "../hooks/DestroyTodo";

type Props = {
  id: number;
};

export const DeleteButton: FC<Props> = (props) => {
  const { id } = props;
  // import destroy todo function
  const { FuncDestroyTodo } = DestroyTodo();

  return (
    <button
      className="flex m-8 hover:scale-90 duration-200"
      onClick={() => FuncDestroyTodo(id)}
    >
      <AiOutlineDelete className="h-6 w-11 text-sky-400" />
      <span className="font-mono pl-2">delete</span>
    </button>
  );
};
