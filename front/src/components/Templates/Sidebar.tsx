import React from "react";

// icon import from react-icon
import {
  AiOutlineCarryOut,
  AiOutlinePlusSquare,
  AiFillFire,
  AiOutlineFileDone,
} from "react-icons/ai";
import { SidebarLink } from "./SidebarLink";

const sidebarArray = [
  // all task page
  {
    path: "/todos",
    icon: <AiOutlineCarryOut className="w-6 h-6" />,
    linkName: "ALL task",
  },
  // new task page
  {
    path: "/newtodo",
    icon: <AiOutlinePlusSquare className="w-6 h-6" />,
    linkName: "New Task",
  },
  // today's task page
  {
    path: "/uncompleted_todo",
    icon: <AiFillFire className="w-6 h-6" />,
    linkName: "Today's Task",
  },
  // completed task page
  {
    path: "/completed_todo",
    icon: <AiOutlineFileDone className="w-6 h-6" />,
    linkName: "completed task",
  },
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between ">
      <aside>
        <ul>
          {sidebarArray.map((sideItem, index) => (
            <SidebarLink
              path={sideItem.path}
              icon={sideItem.icon}
              linkName={sideItem.linkName}
              key={index}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
};
