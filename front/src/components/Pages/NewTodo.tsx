import React, { memo } from "react";
import { Form } from "../Molecules/Form";
import { Layout } from "../Templates/Layout";

const View = () => {
  return (
    <div>
      <div className="text-center text-3xl font-semibold mt-28 font-mono">
        Add New Task!
      </div>
      <Form />
    </div>
  );
};

export const NewTodo = memo(() => {
  return <Layout children={<View />} />;
});
