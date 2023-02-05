import React, {useState} from "react";
import Dropdown from "./Dropdown";

function WelcomeContainer({setLocation}) {

  const inputHandler = (location) => {
    console.log(location + "From Welcome.js");
    setLocation(location);
  }

    return (
      <div className="welcome">
        <h1>Food Finder App</h1>
        <h2>Where are you located?</h2>
        <Dropdown inputHandler={inputHandler} placeholder="Enter your city"/>
      </div>
    )
}

export default WelcomeContainer;