import React, {useState} from "react";
import "./App.css";
import users from "./users";
// import linkedinLogo from "/linkedin.png"

function App() {
  const [search, setSearch] = useState("")
  const [checkbox1, setCheckbox1] = useState(true)
  const [checkbox2, setCheckbox2] = useState(true)

  function searchBar(event){
    setSearch(event.target.value)
  }
  function handleCheckBox1 (event) {
    setCheckbox1(event.target.checked)
  }
  function handleCheckBox2 (event) {
    setCheckbox2(event.target.checked)
  }

  return (
    <div className="App">
      <h1>IronBook</h1>

      <input type="text" name= "search" value={search} onChange={searchBar}/> <br/>

      <input type="checkbox" checked={checkbox1} onChange={handleCheckBox1} />Teacher
        
      <input type="checkbox" checked={checkbox2} onChange={handleCheckBox2} />Student<br/> 

      <table style={{margin: "auto"}}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Roles</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {users
          .filter (user => user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase())  )
          .map((user,i) =>
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td> {user.linkedin && <a href={user.linkedin}><img style={{height:"20px"}} src="/linkedin.png" alt="Logo"/></a>} </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
