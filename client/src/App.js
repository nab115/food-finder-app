import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function SearchBar() {

  const [item, searchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Hungry???"
        value={item}
        onChange={event => searchItem(event.target.value)}
        required
      />
      <button>Search</button>
    </form>
  ); 
}

function App() {

  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
