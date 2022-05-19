import React, { FC } from "react";
import { Switch } from "@headlessui/react";
import { UpdateStatus } from "../hooks/UpdateStatus";

type Props = {
  id: number;
  is_completed: boolean;
};

export const ToggleButton: FC<Props> = (props) => {
  const { id, is_completed } = props;

  const { ToggleUpdate } = UpdateStatus();

  const toggleAction = () => {
    ToggleUpdate(id);
  };

  console.log(id);

  return (
    <div className="m-8 flex hover:scale-90 duration-200">
      <Switch
        checked={is_completed}
        onChange={toggleAction}
        className={`${
          is_completed ? "bg-teal-300" : "bg-red-400"
        } relative inline-flex h-6 w-11 items-center rounded-full `}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            is_completed ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <span className="font-mono pl-3">status</span>
    </div>
  );
};
