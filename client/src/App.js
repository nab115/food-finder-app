import React, {useState} from "react";
import "./App.css";
import "./style.css";
import search from "./fetch.js";

function Body(props) {

  if (!props.item) return <div></div>;

  else {
    return (
      <div>
        Showing results for : {props.item}
        {props.results.restaurants.map(restaurant => <p>{restaurant}</p>)}
        {/* <div>
          {props.results.restaurants[0]}
        </div> */}
      </div>
    );
  }
}

function Header({searchItem}) {
  return (
    <div className="header">
      <h1>Food Finder App</h1>
      <h2>Hungry? Let's help you out.</h2>
      <SearchBar searchItem={searchItem}/>
    </div>
  )
}

function SearchBar({searchItem}) {

  const [item, update] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItem(item);
    update("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input 
        id="searchbar"
        type="text"
        placeholder="Find something tasty"
        value={item}
        onChange={(event) => update(event.target.value)}
        required
      />
      <button>Search</button>
    </form>
  ); 
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
      <Body item={data.item} results={data.results}/>
    </div>
  );
}

export default App;
