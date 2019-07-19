import React from "react";

class SearchAndFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      searchStr: "",
      showTeachers: true,
      showStudents: true,
      campus: "all"
    };
  }

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    let state = value;
    if (e.target.type === "checkbox") state = e.target.checked;

    this.setState(
      {
        [name]: state
      },
      () => this.props.filterUsers(this.state)
    );
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="searchStr"
          value={this.state.searchStr}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          name="showStudents"
          checked={this.state.showStudents}
          onChange={this.handleChange}
        />
        <label>Student</label>
        <input
          type="checkbox"
          name="showTeachers"
          checked={this.state.showTeachers}
          onChange={this.handleChange}
        />
        <label>Teacher</label>
        <select
          name="campus"
          value={this.state.campus}
          onChange={this.handleChange}
        >
          <option value="all">All campuses</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>
      </div>
    );
  }
}

export default SearchAndFilter;
