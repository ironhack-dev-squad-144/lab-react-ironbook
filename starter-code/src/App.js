import React, { useState } from 'react';
import './App.css';
import users from "./data/users.json";
import BookTable from "./Components/BookTable";
// import SearchBar from "./Components/SearchBar"


function App() {

  const [search , setSearch] = useState ({
    searchValue : "",
    isTeacher : false, 
    isStudent: false,
    city:""
    });

  
  function getCitiesList(){
      let cities = [];
      for(let i = 0; i<users.length; i ++){
        if (cities.indexOf(users[i].campus)===-1){
          cities.push(users[i].campus)
      }
    }
    return cities;
  }
    
    const cities = getCitiesList();


  function handleChange(event){
    const target = event.target;
    const value = target.type ==="checkbox" ? target.checked : target.value; 

    setSearch({...search, [event.target.name]:value});
  }

  function filterUser(){
    let filterUser ="";
    filterUser = users.filter(user => user.firstName.toUpperCase().includes (search.searchValue.toUpperCase()) || user.lastName.toUpperCase().includes (search.searchValue.toUpperCase()))
    if (!search.isTeacher || !search.isStudent){
      if (search.isTeacher ===true){
        filterUser = filterUser.filter(user => user.role === "teacher")
      }
      if (search.isStudent===true){
        filterUser = filterUser.filter(user => user.role === "student")
      }
    } 
    if(search.city){
      filterUser = filterUser.filter(user => user.campus === search.city)
    }
    return filterUser;
  }
  
  return (
    <div className="App">
      <h1>IronBook</h1>
      {/* <SearchBar /> */}
      <input 
      name="searchValue" 
      type ="text"
      placeHodler="Search by Name" 
      value = {search.searchValue}
      onChange={e => handleChange(e)} 
      />
      <label> Student 
        <input 
        name="isStudent"
        type ="checkbox"
        value = {search.isTeacher}
        onChange={e => handleChange(e)
        }
        />
      </label>

      <label> Teacher
      <input 
      name="isTeacher"
      type ="checkbox"
      value = {search.isTeacher}
      onChange={e => handleChange(e)
      }
      />
      </label>
      <select name="city"
      onChange ={e=> handleChange (e)}
      >
        <option value="">All campuses</option>
        {
          cities.map((c,i) => (  <option value={c} key = {i}>{c}</option>))
          }
      </select>
      
       <BookTable usersList = {filterUser()} />
    </div>
  );
}

export default App;
