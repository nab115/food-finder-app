import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1>Food Finder App</h1>
      <h2>Hungry? Let's help you out.</h2>
      <SearchBar/>
    </div>
  )
}

function SearchBar() {

  const [item, searchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="searchbar"
        type="text"
        placeholder="Find something tasty"
        value={item}
        onChange={(event) => searchItem(event.target.value)}
        required
      />
      <button>Search</button>
    </form>
  ); 
}

function App() {

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
