import React from "react";
import users from "./users";
import "./App.css";
import StudentRow from "./components/StudentRow";
import SearchAndFilter from "./components/SearchAndFilter";

class App extends React.Component {
  constructor() {
    super();
    this.state = { users: users, displayed: users };
  }

  handleSearchAndFilter = state => {
    const filteredUsers = [...this.state.users].filter(el => {
      let regex = new RegExp(state.searchStr, "i");
      let name = el.firstName + " " + el.lastName;
      let wrongRole =
        (!state.showStudents && el.role === "student") ||
        (!state.showTeachers && el.role === "teacher");
      let campusMatches = state.campus === "all" || state.campus === el.campus;
      return name.match(regex) && !wrongRole && campusMatches;
    });
    this.setState({
      displayed: filteredUsers
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ironbook</h1>
        <SearchAndFilter filterUsers={this.handleSearchAndFilter} />
        <table className="container">
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
            {this.state.displayed.map((el, index) => (
              <StudentRow key={index} {...el} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
