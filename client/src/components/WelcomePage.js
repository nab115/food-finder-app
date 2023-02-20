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
                    <h1>Hungry?</h1>
                    <h1>Let's help you out.</h1>
                    <h3>Where are you located?</h3>
                    <form onSubmit={submitHandler} className='form-container'>
                        <span className="welcome-dropdown">
                            <Dropdown inputHandler={update} placeholder='select your city'/>
                        </span>
                        <button className="welcome-button">Go</button>
                    </form>
                </div>
                <div className='welcome-footer'>Created by <a href='https://www.naranbabha.com/'>Naran Babha</a></div>
            </div>
    )
}

export default WelcomePage;