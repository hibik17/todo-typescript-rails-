import { useState } from "react";
import { Switch } from "@headlessui/react";

export const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleAction = () => {
    setEnabled(!enabled);
    console.log("Toggle was pressed");
  };

  return (
    <Switch
      checked={enabled}
      onChange={toggleAction}
      className={`${
        enabled ? "bg-teal-300" : "bg-red-400"
      } relative inline-flex h-6 w-11 items-center rounded-full mx-32`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
  );
};
