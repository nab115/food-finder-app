import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage.js"
import WelcomePage from "./components/WelcomePage";
import MenuScraperPage from "./components/MenuScraperPage.js";

function App() {

	const [location, update] = useState(localStorage.getItem('location') || '');

	const setLocation = (location) => {
		localStorage.setItem('location', location);
		window.location.href = '/search';
	}

    // TODO : if user hits search page directly without having a location saved
    // in localStorage, re-direct to welcome page
    
	return (
		<Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<WelcomePage setLocation={setLocation}/>}>
                </Route>
                <Route 
                    path="/search" 
                    element={<SearchPage location={location}/>}>
                </Route>
                <Route 
                    path="/scraper" 
                    element={<MenuScraperPage/>}>
                </Route>
            </Routes>
		</Router>
	);
}

export default App;