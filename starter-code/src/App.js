import React from "react";
import "./App.css";
import users from "./users";
const { useState } = React;

function App() {
  const [state, setValue] = useState({
    firstName: "",
    lastName: "",
    campus: "",
    student: false,
    teacher: false,
    linkedin: "",
    search: ""
  });

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValue({
      ...state,
      [name]: value
    });
    console.log(state);
  }



  
  function getFilteredUsers() {
    return users.filter(
      user =>
        user.firstName.toLowerCase().includes(state.search) ||
        user.lastName.toLowerCase().includes(state.search)
    )
    .filter(user => {
      if(state.student && !state.teacher){
        return user.role === "student";
      }
      else if(!state.student && state.teacher){
        return user.role === "teacher";
      }
      else return true;
    })
    .filter(user => {
      if(state.campus){
         return user.campus===state.campus
        }
      else return user
    })
    ;
  }

  // function getFilteredUsers() {
  //   let filteredUsers = users.filter(
  //     user =>
  //       user.firstName.toLowerCase().includes(state.search) ||
  //       user.lastName.toLowerCase().includes(state.search)
  //   );
  //     if(state.student){
  //       filteredUsers =  filteredUsers.filter(user => user.role ==="student");
  //     }
  //     if(state.teacher){
  //       filteredUsers = filteredUsers.filter(user => user.role ==="teacher");
  //     }
  //   if (state.campus){
  //     filteredUsers = filteredUsers.filter(user => user.campus===state.campus);
  //   }
  //   return filteredUsers;
  // }

  //teacher's solution : 
  // function getFilteredUsers(){
  //   return(
  //     users.filter(user=>
  //       (user.firstName + " " + user.lastName)
  //       .toUpperCase()
  //       .includes(state.search.toUpperCase())
  //       &&(!state.student || user.role === "student")
  //       &&(!state.teacher || user.role === "teacher")
  //       &&(state.campus === "" || state.campus === user.campus)

  //       )
  //   )
  // }



  function getCities() {
    const cities = users.map(user => user.campus);
    const filterCities = new Set(cities);
    const uniqueCities = [...filterCities];
    return uniqueCities;
  }

  return (
    <div className="App">
      <p></p>
      <h1>Ironbook</h1>
      <input type="text" name="search" onChange={handleChange}></input>
      <div className="checkboxes">
        <label>Student</label>
        <input type="checkbox" name="student" value = {state.student} onChange={(e) => handleChange(e)}  />
        <label>Teacher</label>
        <input type="checkbox" name="teacher" value = {state.teacher} onChange={(e) => handleChange(e)}  />
        <select name="campus" value = {state.campus} onChange={(e) => handleChange(e)} >
        <option value="">All</option>
          {getCities().map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredUsers().map((user, i) => (
            <tr key={i}>
              <td className="column">{user.firstName}</td>
              <td className="column">{user.lastName}</td>
              <td className="column">{user.campus}</td>
              <td className="column">{user.role}</td>
              <td className="column">
                {user.linkedin ? (
                  <a href={user.linkedin}>
                    <img
                      src="linkedin.png"
                      alt="linkedin"
                      style={{
                        height: 20,
                        width: 20
                      }}
                    />{" "}
                  </a>
                ) : (
                  " "
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
