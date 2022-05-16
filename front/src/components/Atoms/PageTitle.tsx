import React, { FC } from "react";

type Props = {
  children: string;
};

export const PageTitle: FC<Props> = (props) => {
  const { children } = props;
  return <div className="text-center font-extralight mt-32">{children}</div>;
};
