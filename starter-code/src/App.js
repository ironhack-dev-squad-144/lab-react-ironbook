import React, {useState} from "react";
import "./App.css";
import users from "./users";

function App() {

const [search, setSearch] = useState("")
const [isTeacher, setIsTeacher] = useState(true)
const [isStudent, setIsStudent] = useState(true)

function handleChange(event){
  setSearch(
    event.target.value
    )
}

function checkTeacher(event){
  console.log(event.target.checked)
  setIsTeacher(event.target.checked)
}

function checkStudent(event){
  console.log(event.target.checked)
  setIsStudent(event.target.checked)
}


  return (
    <div className="App">
      <h1>IronBook</h1>
      <input name="name" type="text" placeholder="search by name" value={search} onChange={e=>handleChange(e)}/><br/><br/>
      <input name="student" type="checkbox" checked={isStudent} onChange={e=>checkStudent(e)}/> Student
      <input name="teacher" type="checkbox" checked={isTeacher} onChange={e=>checkTeacher(e)}/> Teacher
      <select name="country" id="">
        <option value="">Paris</option>
        <option value="">Lisbon</option>
        <option value="">Berlin</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {users
          .filter(user=> user.firstName.toUpperCase().includes(search.toUpperCase()) ||user.lastName.toUpperCase().includes(search.toUpperCase()))
          .filter(user => (isTeacher && user.role === 'teacher') || (isStudent && user.role === 'student'))
          .map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              {user.linkedin && (
                <td>
                  <a href={user.linkedin}>
                    <img height="15px" src="/linkedin.png" alt=""  />
                  </a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
