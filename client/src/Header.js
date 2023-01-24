import React, {useState} from "react";

function Header({searchItem}) {
    return (
      <div className="header">
        <h1>Food Finder App</h1>
        <h2>Hungry? Let's help you out.</h2>
        <SearchBar searchItem={searchItem}/>
      </div>
    )
  }
  
  function SearchBar({searchItem}) {
  
    const [item, update] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      searchItem(item);
      update("");
    };
  
    return (
      <form onSubmit={handleSubmit} autoComplete="off" className="searchForm">
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

export default Header;