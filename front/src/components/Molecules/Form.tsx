import { useForm, SubmitHandler } from "react-hook-form";
import { CreateTodo } from "../hooks/CreateTodo";
import { CreateTodoType } from "../Types/CreateTodoType";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodoType>();

  // import create action hooks
  const { FuncCreateTodo } = CreateTodo();

  // onSubmit action define
  const onSubmit: SubmitHandler<CreateTodoType> = async (data) => {
    FuncCreateTodo(data);
  };

  return (
    <form className="w-full mt-16">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Todo title
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="todo title"
            {...register("title")}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            task content
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="task content"
            {...register("body")}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 ml-32 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};
