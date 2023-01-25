import React, {useState} from "react";
import "./App.css";
import "./style.css";
import search from "./fetch.js";
import Header from "./Header.js";

function Results({item, results}) {

  if (!item) return <div></div>;

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

function RestaurantCard({restaurant}) {
  return (
    <div className="restaurantCard">
      <div className="restaurantCardContent">
        <h3 className="restaurantName">{restaurant.name}</h3>
        {restaurant.items.map(item => <Item item={item} />)}
      </div>
    </div>
  )
}

function Item({item}) {
  return (
    <div className="item">
      <span className="itemName">{item.name}</span>
      <span className="itemPrice"><span>${item.price.toFixed(2)}</span></span>
      <p className="itemDescription">{item.description}</p>
    </div>
  )
}

function App() {
  const [data, update] = useState({item: "", results: []});

  const searchItem = async (i) => {
    const value = await search();
    console.log(value);
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
