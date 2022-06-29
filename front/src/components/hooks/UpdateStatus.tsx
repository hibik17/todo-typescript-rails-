import axios from "axios";

export const UpdateStatus = () => {
  //this is the hooks,when toggle button was pressed update the task status
  const ToggleUpdate = (id: number) => {
    axios
      .patch(`http://localhost:4000/todos/${id}`)
      .catch((error) => console.log(error))
      .finally(() => window.location.reload());
  };

  return { ToggleUpdate };
};
