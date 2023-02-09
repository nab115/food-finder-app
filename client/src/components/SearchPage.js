import React, {useState, Fragment, useEffect} from 'react';

import { search, searchLocation } from '../request.js';
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Results from './Results.js';

function SearchPage({ location }) {

    const [data, update] = useState(
        { 
            item: '', 
            searchItem: '', 
            results: [], 
            popular: [],
            location: location,
            trigger: 0
        });

    const submitHandler = async (e) => {
        e.preventDefault();
        const results = await search(data.item, data.location);

        // TODO: refactor trigger/reset search bar logic. This is confusing esp.
        // with the poorly named 'trigger' variable

        // setting trigger to 1 when we submit a search to clear the searchbar
        update({...data, item: '', searchItem: data.item, results: results, trigger: 1});
    };

    // Called everytime the searchbar input changes
    // Seems like unecessary overhead, but could be useful to track each
    // character entered if we eventually add a serarch suggestion feature
    const updateItem = (input) => {
        update({ ...data, item: input, trigger: 0});
    }
    
    // const updateLocation = async (input) => {
    //     localStorage.setItem("location", input);
    //     update({...data, location: input, trigger: 0})
    // }

    const updateLocation = async (input) => {
        const popular = await searchLocation(input);
        localStorage.setItem("location", input);
        update({...data, searchItem: '', popular: popular, location: input, trigger: 0})
    }

    // TODO : this logic results in localStorage being set twice on initial 
    // render of the search page, which though insignificant probably shows that 
    // this is a bit flawed

    // upon initial render, updateLocation will be called to fill in the
    // popular restaurants in the location
    // https://stackoverflow.com/questions/54792722/on-react-how-can-i-call-a-function-on-component-mount-on-a-functional-stateless
    useEffect(() => {
        updateLocation(location);
    }, []);

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
        <Results item={data.searchItem} location={data.location} results={data.results} popular={data.popular}/>
        <div className='search-footer'>Created by <a href='https://www.naranbabha.com/'>Naran Babha</a></div>
    </div>
    );
}

export default SearchPage;