import React, {useState, Fragment} from 'react';

import { search} from '../request.js';
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Results from './Results.js';

function SearchPage({ location }) {

    const [data, update] = useState({ item: '', searchItem: '', results: [], location: location, trigger: 0});

    const submitHandler = async (e) => {
        e.preventDefault();
        const value = await search(data.item, data.location);
        update({...data, item: '', searchItem: data.item, results: value, trigger: 1});
    };

    const updateItem = (input) => {
        update({ ...data, item: input, trigger: 0});
    }
  
    const updateLocation = (input) => {
        localStorage.setItem("location", input);
        update({...data, location: input, trigger: 0})
    }

    return (
    <div className='search'>
        <div className='header'>
            <div className='input-container'>
                <form onSubmit={submitHandler} autoComplete="off" className="form-container">
                    <span className='search-dropdown'>
                        <Dropdown inputHandler={updateLocation} selected={location} placeholder='update your location'/>
                    </span>
                    <span className='search-input'>
                        <SearchBar inputHandler={updateItem} placeholder="Find something tasty" trigger={data.trigger}/>
                    </span>
                    <button type='submit' className='search-button'>Go</button>
                </form>
            </div>
        </div>
        <Results item={data.searchItem} results={data.results}/>
    </div>
    );
}

export default SearchPage;