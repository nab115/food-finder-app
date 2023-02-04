import React, {useState} from "react";

function Dropdown({inputHandler, placeholder}) {
  
    const [input, update] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      inputHandler(input);
    };
  
    return (
        <div><p>{input}</p>
      <form onSubmit={submitHandler} autoComplete="off" className="searchForm">
        <select 
            name="locations"
            onChange={(event) => update(event.target.value)}>
          <option value="" disabled selected>select your location</option>
          <option value="seattle">Seattle, WA</option>
          <option value="philadelphia">Philadelphia, PA</option>
        </select>
      </form>
      </div>
    );
}

export default Dropdown;