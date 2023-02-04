import React, {useState} from "react";

function SearchBar({inputHandler, placeholder}) {
  
    const [input, update] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      inputHandler(input);
      update("");
    };
  
    return (
      <form onSubmit={submitHandler} autoComplete="off" className="searchForm">
        <input 
          id="searchbar"
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(event) => update(event.target.value)}
          required
        />
      </form>
    );
}

export default SearchBar;