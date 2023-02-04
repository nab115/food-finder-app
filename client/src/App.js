import React, {useState, Fragment} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./style.css";
import SearchContainer from "./components/SearchContainer.js"
import WelcomeContainer from "./components/WelcomeContainer";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeContainer />}></Route>
          <Route path="/search" element={<SearchContainer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;