import { FC } from "react";
import { FiEdit } from "react-icons/fi";

type Props = {
  id: number;
};

export const EditButton: FC<Props> = (props) => {
  console.log(props.id);
  return (
    <button
      type="button"
      onClick={() => console.log(props.id)}
      className="flex m-8 hover:scale-90 duration-200"
    >
      <FiEdit className="h-6 w-11 text-orange-400" />
      <span className="font-mono pl-3">edit</span>
    </button>
  );
};
