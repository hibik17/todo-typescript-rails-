import { useForm } from "react-hook-form";
import React, { FC } from "react";
import { TodoType } from "../Types/TodoType";

type Props = {
  todo?: TodoType;
};

export const EditForm: FC<Props> = (props) => {
  const onSubmit = () => console.log("fda");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="w-[80%] h-full mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-30">
        <div className="w-[80%]">
          <p className="font-mono text-2xl mb-5">Todo title</p>
          <p className="text-red-600 text-lg">
            {errors.firstName?.type === "required" && "First name is required"}
          </p>
          <input
            className="w-full border-b border-teal-200 focus:outline-none"
            {...register("firstName", { required: true })}
            defaultValue={props.todo?.title}
          />
        </div>

        <div className="w-[80%] mt-10">
          <p className="font-mono text-2xl text-md mb-5">Todo content</p>
          <p className="text-red-600 text-lg">
            {errors.lastName?.type === "required" && "First name is required"}
          </p>
          <input
            className="w-full border-b border-teal-200 focus:outline-none"
            {...register("lastName", { required: true })}
            defaultValue={props.todo?.title}
          />
        </div>

        <div className="w-[80%] flex justify-end">
          <input
            type="submit"
            className="rounded-md shadow-lg w-40 h-10 bg-teal-300 mt-10"
          />
        </div>
      </form>
    </div>
  );
};
