import React from 'react';
// import users from "../data/users.json"
import LinkedIn from "./LinkedIn"


function BookTable(props){
  return (
    <div className = "table-container">
    <table className = "header-container">
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
      {props.usersList.map((u,i) => (
    <tr key = {i} >
        <td name = "firstName">{u.firstName}</td>
        <td name = "lastName">{u.lastName}</td>
        <td name = "campus">{u.campus}</td>
        <td name = "role">{u.role}</td>
        <LinkedIn link = {u.linkedin}/>
        {/* <td name = "link">{u.linkedin}</td> */}
    </tr>
     ))}
    </tbody>
    </table>
    </div>

)
}


export default BookTable; 
