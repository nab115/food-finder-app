import React, {useState} from "react";

function SearchBar({inputHandler}) {
  
    const [item, update] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      inputHandler(item);
      update("");
    };
  
    return (
      <form onSubmit={submitHandler} autoComplete="off" className="searchForm">
        <input 
          id="searchbar"
          type="text"
          placeholder="Find something tasty"
          value={item}
          onChange={(event) => update(event.target.value)}
          required
        /> 
      </form>
    );
}

export default SearchBar;