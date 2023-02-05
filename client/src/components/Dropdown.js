import React, {useState} from "react";

function Dropdown({inputHandler}) {
  
    const [input, update] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      inputHandler(input);
    };
  
    return (
      <form onSubmit={submitHandler} autoComplete="off" className="searchForm">
        <select 
            name="locations"
            onChange={(event) => update(event.target.value)}>
          <option value="" selected disabled>select your location</option>
          <option value="Seattle">Seattle, WA</option>
          <option value="Philadelphia">Philadelphia, PA</option>
        </select><button></button>
      </form>
    );
}

export default Dropdown;