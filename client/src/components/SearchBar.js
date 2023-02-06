import React, { useState, useEffect } from "react";

function SearchBar({inputHandler, placeholder, trigger}) {
  
    const [input, update] = useState('');

    const onChange = (input) => {
      update(input);
      inputHandler(input);
    }

    useEffect(() => {
      if (trigger) update('');
    })
  
    return (
        <input 
          id='searchbar'
          type='text'
          placeholder={placeholder}
          value={input}
          onChange={(event) => onChange(event.target.value)}
          required
        />
    );
}

export default SearchBar;