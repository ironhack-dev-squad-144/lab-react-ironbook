import React, { useState } from "react";

import users from "./users";

import { Table } from "reactstrap";

function ContactTable(props) {
  function filterAll(users) {
    return filterRole(filterCampus(filterName(users)));
  }

  function filterName(users) {
    return users.filter(user => {
      return (user.firstName + " " + user.lastName)
        .toLowerCase()
        .includes(search.name.toLowerCase());
    });
  }

  function filterCampus(users) {
    if (search.campus === "All") {
      return users;
    } else {
      return users.filter(user => {
        return user.campus === search.campus;
      });
    }
  }

  function filterRole(users) {
    if (search.isStudent && search.isTeacher) {
      return users;
    } else if (!search.isStudent && search.isTeacher) {
      return users.filter(user => user.role === "teacher");
    } else if (!search.isTeacher && search.isStudent) {
      return users.filter(user => user.role === "student");
    } else {
      return [];
    }
  }

  function resetFilter() {
    setSearch({
      name: "",
      isStudent: true,
      isTeacher: true,
      campus: "All"
    });
    console.log("ping");
  }

  let repeatedCampuses = users.map(user => user.campus);

  let uniqueCampuses = repeatedCampuses.filter(
    (campus, i) => repeatedCampuses.indexOf(campus) === i
  );

  console.log("unique:", uniqueCampuses);

  const [search, setSearch] = useState({
    name: "",
    isStudent: true,
    isTeacher: true,
    campus: "All"
  });

  function handleChange(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSearch({
      ...search,
      [e.target.name]: value
    });
  }

  return (
    <div className="contactTable">
      <pre>{JSON.stringify(search, null, 2)}</pre>
      <div className="mb-5">
        <div>
          {" "}
          <input
            placeholder="search by name"
            className="col-12"
            name="name"
            type="text"
            onChange={handleChange}
            value={search.name}
          />
        </div>
        <div className="mt-3 d-flex justify-content-around">
          <div>
            <input
              type="checkbox"
              name="isStudent"
              checked={search.isStudent}
              onChange={handleChange}
            />
            Student
          </div>
          <div>
            <input
              type="checkbox"
              name="isTeacher"
              checked={search.isTeacher}
              onChange={handleChange}
            />
            Teacher{" "}
          </div>
          <select name="campus" value={search.campus} onChange={handleChange}>
            <option value="All">All</option>
            {uniqueCampuses.map((campus) => (
              <option value={campus}>{campus}</option>
            ))}
          </select>
          <button className="btn btn-danger" onClick={resetFilter}>
            Reset Filter
          </button>
        </div>
      </div>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {filterAll(users).map((user, i) => (
            <tr key={i + user.firstName}>
              <td scope="row">{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                {user.linkedin && (
                  <a href={user.linkedin}>
                    <img width="20" src="/linkedin.png" alt="" />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactTable;
