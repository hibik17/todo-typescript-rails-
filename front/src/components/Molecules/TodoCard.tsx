import React, { FC } from "react";
import { ToggleButton } from "../Atoms/ToggleButton";
import { TodoType } from "../Types/TodoType";

type Props = {
  todo: TodoType;
};

export const TodoCard: FC<Props> = (props) => {
  const { todo } = props;

  return (
    <div
      className="w-80 h-48 bg-gradient-to-r from-rose-100 to-teal-100 animate-in slide-in-from-bottom
    rounded overflow-hidden shadow-lg m-3 hover:-translate-y-1 hover:scale-110 hover:bg-teal-100 duration-300"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-10">{todo.title}</div>
        <p className="text-gray-700 text-base">{todo.body}</p>
      </div>
      <ToggleButton />
    </div>
  );
};
