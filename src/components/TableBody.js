import React from "react";

function TableBody({ users }) {
  function formatStuff(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
              </td>
              <td data-th="Name" className="name-cell align-left">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
                {formatStuff(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default TableBody;
