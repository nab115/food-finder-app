import React, {useState, Fragment} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./style.css";
import SearchContainer from "./components/SearchPage.js"
import WelcomeContainer from "./components/WelcomePage";

function App() {

  const [location, update] = useState(localStorage.getItem('location') || '');

  // console.log(location);

  const setLocation = (location) => {
    console.log(location + 'From App.js');
    localStorage.setItem('location', location);
    window.location.href = '/search';
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeContainer setLocation={setLocation}/>}></Route>
          <Route path="/search" element={<SearchContainer location={location}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;