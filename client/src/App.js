import React, {useState} from "react";
import "./App.css";
import "./style.css";
import search from "./fetch.js";
import Header from "./Header.js"

function Results({item, results}) {

  if (!item) return <div></div>;

  else {
    return (
      <div id="results">
        <p className="bold-text">Showing results for : {item}</p>
        <div id="restaurants">
        {results.restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} />)}
        </div>
      </div>
    );
  }
}

function RestaurantCard({restaurant}) {
  return (
    <div className="restaurantCard">
    <h2 className="restaurantName">{restaurant}</h2>
    </div>
  )
}

function App() {
  const [data, update] = useState({item: "", results: []});

  const searchItem = async (i) => {
    const value = await search();
    update({item: i, results: value});
  };

  return (
    <div className="App">
      <Header searchItem={searchItem}/>
      <Results item={data.item} results={data.results}/>
    </div>
  );
}

export default App;
