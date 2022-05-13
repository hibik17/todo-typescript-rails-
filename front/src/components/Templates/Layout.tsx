import React from "react";
import { Header } from "../Organisms/Header";
import { Sidebar } from "../Organisms/Sidebar";

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="flex row w-full h-full">
        <div className="w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-10">{children}</div>
      </div>
    </div>
  );
};
