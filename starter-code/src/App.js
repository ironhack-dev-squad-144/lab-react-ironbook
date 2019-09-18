import React, { useState } from "react";
import users from "./users";
import "./App.css";

function App() {
  const [state, setState] = useState({
    search: "",
    isTeacher: false,
    isStudent: false,
    campus: " "
  });
  function handleChange(event) {
    let target = event.target; //target l'input
    let value = target.type === "checkbox" ? target.checked : target.value; // target valeur de l'input
    let name = target.name; // nom de l'input
    setState({ ...state, [name]: value });
  }

  var filterUsers = () => {
    var filter = users.filter(
      user =>
        user.firstName.toLowerCase().includes(state.search) ||
        user.lastName.toLowerCase().includes(state.search)
    );
    let filter2 = filter;
    if (state.isTeacher) {
      filter2 = filter.filter(user => user.role === "teacher");
    }
    if (state.isStudent) {
      filter2 = filter.filter(user => user.role === "student");
    }
    if (state.isStudent && state.isTeacher) {
      return filter;
    }
    let filterCampus = filter2;
    if (state.campus === " ") {
      return filterCampus;
    }
    return filterCampus.filter(user => user.campus === state.campus);
  };

  function onSubmit(event) {
    event.preventDefault();
    setState({
      ...state
    });
  }
  function setOption() {
    let options = [];
    users.forEach(element => {
      if (!options.includes(element.campus)) options.push(element.campus);
    });
    return options;
  }
  return (
    <div className="App">
      <h1>IronBook</h1>
      <form onSubmit={onSubmit}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search by name"
          value={state.search}
          onChange={handleChange}
        />
        <input
          name="isStudent"
          type="checkbox"
          value={state.isStudent}
          onChange={handleChange}
        />
        <label>Student</label>
        <input
          name="isTeacher"
          type="checkbox"
          value={state.isTeacher}
          onChange={handleChange}
        />
        <label>Teacher</label>
        <label>Campus :</label>
        <select
          name="campus"
          id="campus"
          onChange={handleChange}
          value={state.campus}
        >
          <option value=" ">Choose your campus</option>
          {setOption().map((campus, i) => {
            return (
              <option key={i} value={campus}>
                {campus}
              </option>
            );
          })}
        </select>
      </form>
      {/* <pre>
        {state.search}
        {state.isTeacher}
        {state.isStudent}
      </pre> */}
      <table className="table">
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
          {filterUsers().map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin ? (
                    <a
                      href={user.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="linkedin"
                        src="/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
