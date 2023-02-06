import React, {useState} from "react";
import Dropdown from "./Dropdown";

function WelcomePage({setLocation}) {

    const [location, update] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setLocation(location);
    };

    return (
      <div className='welcome'>
        <div className='welcome-content'>
            <h1>Food Finder App</h1>
            <h2>Where are you located?</h2>
            <form onSubmit={submitHandler} className='input-container'>
                <span className="welcome-dropdown">
                    <Dropdown inputHandler={update} placeholder='select your location'/>
                </span>
                <button className="welcome-button">Go</button>
            </form>
        </div>
        <div className='welcome-image'></div>
      </div>
    )
}

export default WelcomePage;