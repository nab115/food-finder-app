import React, {useState, Fragment} from 'react';

import { search} from '../request.js';
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Results from './Results.js';

function SearchContainer({ location }) {

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
    <Fragment>
        <div className="header">
            <h1>Food Finder App</h1>
            <h2>Hungry? Let's help you out.</h2>
            <form onSubmit={submitHandler} autoComplete="off" className="searchForm">
                <SearchBar inputHandler={updateItem} placeholder="Find something tasty" trigger={data.trigger}/>
                <Dropdown inputHandler={updateLocation} selected={location} placeholder='update your location'/>
                <button></button>
            </form>
        </div>
        <Results item={data.searchItem} results={data.results}/>
    </Fragment>
    );
}

export default SearchContainer