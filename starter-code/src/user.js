import React from "react";

function user(props) {
  //   return <div className="User">test User</div>;
  return (
    <div>
      <h1>IronBook</h1>
      <table style={{ width: "420px" }} className="container">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
              <td></td>
              <td>{user.name}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default user;
