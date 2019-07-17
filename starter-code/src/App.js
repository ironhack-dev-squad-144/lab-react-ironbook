import React, { useState } from "react";
import "./App.css";
import users from "./users.json";

function App() {
  const [search, setSearch] = useState("");
  const [isTeacher, setIsTeacher] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [country, setCountry] = useState('Berlin'); 

  function searchHandle(e) {
    setSearch(e.target.value);
  }

  function checkTeacherHandle() {
    setIsTeacher(!isTeacher);  // setSearch("teacher")
  }

  function checkStudentHandle() {
    setIsStudent(!isStudent);
    //  setSearch("student")
  }

  function selectCountry(e) {
    setCountry(e.target.value);
  }

  return (
    <div className="App">
      <h1>IronBook</h1>
      <input
        type="text"
        placeholder="Search by name"
        name="search"
        value={search} // NEW
        onChange={searchHandle}
      />
      <br />
      <br />
      <input
        type="checkbox"
        checked={!isTeacher}
        onChange={checkTeacherHandle}
      />
      Teacher
      <input
        type="checkbox"
        checked={!isStudent}
        onChange={checkStudentHandle}
      />
      Student
      <select onChange={selectCountry}>
        <option value={"Berlin"}>Berlin</option>
        <option value={"Paris"}>Paris</option>
        <option value={"Lisbon"}>Lisbon</option>
      </select>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Campus </th>
            <th>Role </th>
            <th>Links </th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(
              user =>
                (user.firstName.toLowerCase().includes(search.toLowerCase()) ||
                  user.lastName.toLowerCase().includes(search.toLowerCase())) &&
                (isStudent || user.role === "student") && // DIFFERENT no more search
                (isTeacher || user.role === "teacher") && // DIFFERENT no more search
                (user.campus === country)
            )
            .map((user, i) => (
              <tr key={i}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin && (
                    <a href={user.linkedin}>
                      <img src="../images/linkedin.png" />
                    </a>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
