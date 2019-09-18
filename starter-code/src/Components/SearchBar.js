import React, { useState} from 'react';
import users from "../data/users.json"

function SearchBar(props){
  const [search , setSearch] = useState ({searchValue : ""});

  function handleChange(event){
    let filtredUsers = users.filter(user => user.firstName.includes (search.searchValue) || user.lastName.includes (search.searchValue));
    setSearch(filtredUsers);
  }

  // function handleSubmit(){
  //   event.preventDefault();
  // }

  return(
      <input 
      name="searchBar" 
      type ="text"
      placeHodler="Search by Name" 
      value = {search.searchValue}
      onChange={e => handleChange(e)} 
      />
  );
}

export default SearchBar;