import React, {useState} from "react";
import SearchBar from "./SearchBar";

function WelcomeContainer() {

    const setLocation = () => {
        window.location.href = "/search";
    }

    return (
      <div className="welcome">
        <h1>Food Finder App</h1>
        <h2>Where are you located?</h2>
        <SearchBar inputHandler={setLocation} placeholder="Enter your city"/>
      </div>
    )
}

export default WelcomeContainer;