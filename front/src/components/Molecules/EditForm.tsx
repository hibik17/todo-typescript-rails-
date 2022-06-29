import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { TodoType } from "../Types/TodoType";
import axios from "axios";

type Props = {
  todo?: TodoType;
};

interface UpdateForm {
  title: string;
  body: string;
}

export const EditForm: FC<Props> = (props) => {
  // axios patch
  const onSubmit: SubmitHandler<UpdateForm> = (data) => {
    axios
      .patch(`http://localhost:4000/todos/${props.todo!.id}`, data)
      .then(() => {
        console.log("update log");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("update action was completed");
      });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateForm>();

  return (
    <div className="w-[80%] h-full mt-10 ">
      <form onSubmit={handleSubmit(onSubmit)} className="ml-40">
        <div className="w-[80%]">
          <p className="font-mono text-2xl mb-5">Todo title</p>
          <p className="text-red-600 text-lg">
            {errors.title?.type === "required" && "First name is required"}
          </p>
          <input
            className="w-full border-b border-teal-200 focus:outline-none"
            {...register("title", { required: true })}
            defaultValue={props.todo?.title}
          />
        </div>

        <div className="w-[80%] mt-10">
          <p className="font-mono text-2xl text-md mb-5">Todo content</p>
          <p className="text-red-600 text-lg">
            {errors.body?.type === "required" && "First name is required"}
          </p>
          <input
            className="w-full border-b border-teal-200 focus:outline-none"
            {...register("body", { required: true })}
            defaultValue={props.todo?.title}
          />
        </div>

        <div className="w-[80%] flex justify-center">
          <input
            type="submit"
            className="rounded-md shadow-lg w-40 h-10 bg-teal-300 mt-10"
          />
        </div>
      </form>
    </div>
  );
};
