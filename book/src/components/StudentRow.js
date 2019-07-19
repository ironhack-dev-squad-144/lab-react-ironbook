import React from "react";

const StudentRow = props => {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.campus}</td>
      <td>{props.role}</td>
      <td>
        {props.linkedin && (
          <a href={props.linkedin}>
            <img style={{ width: 15 }} src="linkedin.png" alt="hihi" />
          </a>
        )}
      </td>
    </tr>
  );
};

export default StudentRow;
