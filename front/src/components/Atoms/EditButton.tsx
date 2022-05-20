import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
};

export const EditButton: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { id } = props;

  return (
    <button
      type="button"
      onClick={() => navigate(`${id}/edit`)}
      className="flex m-8 hover:scale-90 duration-200"
    >
      <FiEdit className="h-6 w-11 text-orange-400" />
      <span className="font-mono pl-3">edit</span>
    </button>
  );
};
