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
    <button onClick={() => FuncDestroyTodo(id)}>
      <AiOutlineDelete className="w-11 h-8" />
    </button>
  );
};
