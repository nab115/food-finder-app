import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";

function Results({item, results}) {

    if (!item) return <div></div>;
  
    else if (results.length === 0) {
      return (
        <div id="results">
          <p className="bold-text">No results found for : {item}
          <br></br>
          <br></br>
          Note : this application is still in development, and is using very limited test data.
          To view some results, try "pizza" or "sandwich"
          </p>
        </div>
      );
    }
  
    else {
      return (
        <div id="results">
          <p className="bold-text">Showing results for : {item}</p>
          <div id="restaurants">
          {results.map(restaurant => <RestaurantCard restaurant={restaurant} />)}
          </div>
        </div>
      );
    }
}

export default Results;