import { FC } from "react";
import { ToggleButton } from "../Atoms/ToggleButton";
import { TodoType } from "../Types/TodoType";
import { FormatDate } from "../hooks/FormatDate";
import { DestroyTodo } from "../hooks/DestroyTodo";

type Props = {
  todo: TodoType;
};

// format the time data, which is came from backend
export const TodoCard: FC<Props> = (props) => {
  const { todo } = props;

  // import format date function from hooks
  const { FuncFormatDate } = FormatDate();

  // import destroy todo function
  const { FuncDestroyTodo } = DestroyTodo();

  return (
    <div className="px-10 my-4 py-6 rounded shadow-xl bg-white w-4/5 mx-auto animate-in slide-in-from-bottom">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {FuncFormatDate(new Date(todo.created_at))}
        </span>
        {/* <button className="px-2 py-1 bg-blue-600 text-gray-100 font-bold rounded hover:bg-gray-500">
          Announcement
        </button> */}
        <ToggleButton id={todo.id} is_completed={todo.is_completed} />
      </div>
      <div className="mt-2 truncate">
        <button className="text-2xl text-gray-700 font-bold hover:text-gray-600">
          {todo.title}
        </button>
        <p className="mt-2 text-gray-600 truncate break-words">{todo.body}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        {todo.is_completed && (
          <button
            className="text-blue-600 hover:underline"
            onClick={() => FuncDestroyTodo(todo.id)}
          >
            Delete
          </button>
        )}
        {todo.is_completed || (
          <button
            className="text-blue-600 hover:underline"
            onClick={() => console.log("edit page ")}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
