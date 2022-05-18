import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineFileDone } from "react-icons/ai";
import { DeleteButton } from "./DeleteButton";
import { ToggleButton } from "./ToggleButton";
import { EditModal } from "../Pages/EditModal";

export const PopoverButton = () => {
  return (
    <Menu as="div">
      <div>
        <Menu.Button className="pl-auto mx-6 hover:text-red-300">
          <AiOutlineFileDone className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right--20 w-60 rounded-md shadow-lg bg-white">
          <div>
            <Menu.Item>
              <div>
                <DeleteButton id={2} />
              </div>
            </Menu.Item>
            <Menu.Item>
              <ToggleButton id={2} is_completed={true} />
            </Menu.Item>
            <Menu.Item>
              <EditModal />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
