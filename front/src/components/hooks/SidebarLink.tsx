import React, { FC, memo } from "react";
import { AiOutlineLeftSquare } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  linkText?: any;
  linkPath?: any;
  linkIcon?: any;
};

export const SidebarLink: FC<Props> = memo((props) => {
  const { linkText, linkPath, linkIcon } = props;

  const navigate = useNavigate();

  const Current_location = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <li>
      <button
        className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-300"
        onClick={() => navigate(linkPath)}
      >
        {linkIcon}
        <span className="mx-4 font-medium">{linkText}</span>
        {Current_location() === linkPath && (
          <AiOutlineLeftSquare className="w-6 h-6 ml-auto text-red-400" />
        )}
      </button>
    </li>
  );
});
