import React from "react";
import TableBody from "./TableBody"

function Table({ labels, users, handleSort }) {
  return (
    <div className="Table mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {labels.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <TableBody users={users} />
      </table>
    </div>
  );
}

export default Table;
