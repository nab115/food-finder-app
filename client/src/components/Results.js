import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";

function Results({item, location, results, popular}) {

    if (!item) return (
    <div id="results" className="content-container padded">
        <p>Popular restaurants near <span className='italic'>{location}</span></p>
        <div id="restaurants">
          {popular.map(restaurant => <RestaurantCard restaurant={restaurant} />)}
        </div>
    </div>
    );
  
    else if (results.length === 0) {
      return (
        <div id="results">
          <p>No results found for <span className='bold'>{item}</span> near <span className='italic'>{location}</span>
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
          <p>Showing results for <span className='bold'>{item}</span> near <span className='italic'>{location}</span></p>
          <div id="restaurants">
          {results.map(restaurant => <RestaurantCard restaurant={restaurant} />)}
          </div>
        </div>
      );
    }
}

export default Results;