import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";

import search from "../request.js";
import Header from "./Header.js";
import Results from "./Results.js";

function SearchContainer({location}) {

    console.log(location + " initializd for SearchContainer.js");
    const [data, update] = useState({item: "", results: [], });
    const searchItem = async (i) => {
      const value = await search(i, location);
      console.log(value);
      update({item: i, results: value});
    };
  
    return (
    <Fragment>
      <Header searchItem={searchItem}/>
      <Results item={data.item} results={data.results}/>
    </Fragment>
    );
}

export default SearchContainer