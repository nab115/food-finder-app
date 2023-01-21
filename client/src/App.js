import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function Body({item}) {
  if (!item) return <div></div>;

  else {
    return (
      <div>Showing results for : {item}</div>
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

  const [item, update] = useState("");

  const searchItem = (i) => update(i);

  return (
    <div className="App">
      <Header searchItem={searchItem}/>
      <Body item={item}/>
    </div>
  );
}

export default App;
