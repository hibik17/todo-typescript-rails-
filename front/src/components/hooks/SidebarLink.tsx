import React, { FC, memo } from "react";
import { AiOutlineLeftSquare } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

type sideItem = {
  path: string;
  icon: JSX.Element;
  linkName: string;
};

export const SidebarLink: FC<sideItem> = memo((props) => {
  const { path, icon, linkName } = props;

  const navigate = useNavigate();

  const Current_location = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <li>
      <button
        className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-300"
        onClick={() => navigate(path)}
      >
        {icon}
        <span className="mx-4 font-medium">{linkName}</span>
        {Current_location() === path && (
          <AiOutlineLeftSquare className="w-6 h-6 ml-auto text-red-400" />
        )}
      </button>
    </li>
  );
});
