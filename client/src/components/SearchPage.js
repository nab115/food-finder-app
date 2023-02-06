import React, {useState, Fragment} from 'react';

import { search} from '../request.js';
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Results from './Results.js';

function SearchContainer({location}) {

    const [data, update] = useState({ item: '', results: [], location: location });

    const searchItem = async (i) => {
      const value = await search(i, data.location);
      update({item: i, results: value});
    };
  
    const changeLocation = (input) => {
      update({location: input})
    }

    return (
    <Fragment>
      <div className="header">
        <h1>Food Finder App</h1>
        <h2>Hungry? Let's help you out.</h2>
        <SearchBar inputHandler={searchItem} placeholder="Find something tasty"/>
        <Dropdown inputHandler={changeLocation} selected={location} placeholder='update your location'/>
      </div>
      <Results item={data.item} results={data.results}/>
    </Fragment>
    );
}

export default SearchContainer