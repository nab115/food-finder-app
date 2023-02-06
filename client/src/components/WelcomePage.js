import React, {useState} from "react";
import Dropdown from "./Dropdown";

function WelcomeContainer({setLocation}) {

  const [location, update] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setLocation(location);
  };

    return (
      <div className="welcome">
        <h1>Food Finder App</h1>
        <h2>Where are you located?</h2>
        <form onSubmit={submitHandler}>
          <Dropdown inputHandler={update} placeholder="select your location"/>
          <button></button>
        </form>
      </div>
    )
}

export default WelcomeContainer;