import React, { useState } from "react";
import "./App.css";
import users from "./users";

function App() {
  const [search, setSearch] = useState({
    name: "",
    student: false,
    teacher: false,
    campus: ""
  });

  function handleChange(event) {
    let target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    let name = target.name;
    setSearch({ ...search, [name]: value });
  }

  const filterUsers = () => {
    const role = users.filter(
      user =>
        user.firstName.toLowerCase().includes(search.name) ||
        user.lastName.toLowerCase().includes(search.name)
    );
    if (search.teacher && search.student) {
      return role;
    }
    let role2 = null;
    if (search.student) {
      role2 = role.filter(toto => toto.role === "student");
    }
    if (search.teacher) {
      role2 = role.filter(toto => toto.role === "teacher");
    }
    if (search.campus) {
      role2 = role.filter(toto => toto.campus === search.campus);
    }
    if (search.campus === "All Campuses") return role;
    if (role2) return role2;
    return role;
  };
  function handleSubmit(event) {
    event.preventDefault();
  }

  function setOption() {
    let options = [];
    users.forEach(user => {
      if (!options.includes(user.campus)) {
        options.push(user.campus);
      }
    });

    return options;
  }
  const cities = setOption();

  return (
    <div>
      <h1>IronBook</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={search.name}
          onChange={handleChange}
        />
        <label>Student</label>
        <input
          type="checkbox"
          name="student"
          checked={search.student}
          onChange={handleChange}
        ></input>
        <label>Teacher</label>

        <input
          type="checkbox"
          name="teacher"
          checked={search.teacher}
          onChange={handleChange}
        ></input>

        <label>Campus:</label>
        <select value={search.campus} name="campus" onChange={handleChange}>
          <option value="">All</option>
          {cities.map(campus => (
            <option>{campus}</option>
          ))}
        </select>
      </form>

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
          {filterUsers().map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                {user.linkedin ? (
                  <a href={user.linkedin}>
                    {" "}
                    <img src="./linkedin.png" alt="linkedin"></img>{" "}
                  </a>
                ) : null}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
