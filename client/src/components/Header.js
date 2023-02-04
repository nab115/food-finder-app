import React, {useState} from "react";
import SearchBar from "./SearchBar";

function Header({searchItem}) {
    return (
      <div className="header">
        <h1>Food Finder App</h1>
        <h2>Hungry? Let's help you out.</h2>
        <SearchBar inputHandler={searchItem}/>
      </div>
    )
}

export default Header;