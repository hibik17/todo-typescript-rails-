import React, { memo } from "react";
import { Form } from "../Molecules/Form";
import { Layout } from "../Templates/Layout";

export const NewTodo = memo(() => {
  return <Layout children={<Form />} />;
});
