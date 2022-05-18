import { FC } from "react";
import { ToggleButton } from "../Atoms/ToggleButton";
import { TodoType } from "../Types/TodoType";
import { FormatDate } from "../hooks/FormatDate";
import { EditModal } from "../Pages/EditModal";
import { DeleteButton } from "../Atoms/DeleteButton";
import { PopoverButton } from "../Atoms/PopoverButton";

type Props = {
  todo: TodoType;
};

// format the time data, which is came from backend
export const TodoCard: FC<Props> = (props) => {
  const { todo } = props;

  // import format date function from hooks
  const { FuncFormatDate } = FormatDate();

  return (
    <div className="px-10 my-4 py-6 rounded shadow-xl bg-white w-2/5 mx-10 animate-in slide-in-from-bottom bg-gradient-to-r from-rose-100 to-teal-100 hover:scale-110 duration-300">
      <div className="flex justify-items-end">
        <div className="w-1/3 font-light text-gray-600">
          {FuncFormatDate(new Date(todo.created_at))}
        </div>
        <div className="w-2/3">
          <DeleteButton id={todo.id} />
          <ToggleButton id={todo.id} is_completed={todo.is_completed} />
        </div>
      </div>
      <div className="mt-2 truncate">
        <button className="text-2xl text-gray-700 font-bold hover:text-gray-600">
          {todo.title}
        </button>
        <p className="mt-2 text-gray-600 truncate break-words">{todo.body}</p>
      </div>
      {todo.is_completed || <EditModal />}
      <PopoverButton />
    </div>
  );
};
