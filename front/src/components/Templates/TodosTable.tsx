import React from "react";

export const TodosTable = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Is_completed??</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
      </tbody>
    </table>
  );
};
