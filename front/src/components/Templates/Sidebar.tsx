import React, { useCallback, useEffect } from "react";

// icon import from react-icon
import {
  AiOutlineCarryOut,
  AiOutlinePlusSquare,
  AiFillFire,
} from "react-icons/ai";
import { SidebarLink } from "../hooks/SidebarLink";

export const Sidebar = () => {
  const sidebarArray = [
    // all task page
    ["/todos", <AiOutlineCarryOut className="w-6 h-6" />, "ALL task"],
    // new task page
    ["/newtodo", <AiOutlinePlusSquare className="w-6 h-6" />, "New Task"],
    // today's task page
    ["/today_todo", <AiFillFire className="w-6 h-6" />, "Today's Task"],
    // completed task page
    ["/completed_todo", <AiFillFire className="w-6 h-6" />, "completed task"],
  ];

  return (
    <div className="flex flex-col justify-between mt-6">
      <aside>
        <ul>
          {sidebarArray.map((sideItem, index) => (
            <SidebarLink
              linkPath={sideItem[0]}
              linkIcon={sideItem[1]}
              linkText={sideItem[2]}
              key={index}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
};
