import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";

function Results({item, location, results, popular}) {

    if (!item) return (
    <div id="results">
        <p>Popular restaurants near {location}</p>
        <div id="restaurants">
          {popular.map(restaurant => <RestaurantCard restaurant={restaurant} />)}
        </div>
    </div>
    );
  
    else if (results.length === 0) {
      return (
        <div id="results">
          <p>No results found for : {item}
          <br></br>
          Note : this application is still in development, and is using very limited test data.
          To view some results, try selecting "Seattle, WA" and searching "pizza" or "sandwich"
          </p>
        </div>
      );
    }
  
    else {
      return (
        <div id="results">
          <p>Showing results for {item} near {location}</p>
          <div id="restaurants">
          {results.map(restaurant => <RestaurantCard restaurant={restaurant} />)}
          </div>
        </div>
      );
    }
}

export default Results;