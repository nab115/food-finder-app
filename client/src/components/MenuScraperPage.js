import React, {useState} from "react";
import Nav from './Nav.js';
import SearchBar from './SearchBar.js'
import RestaurantCard from './RestaurantCard.js'
import { scrapeMenu } from '../request.js';

function MenuScraperPage() {

    const [data, update] = useState({restaurant: null, url: '', status: -1});

    const submitHandler = async (e) => {
        e.preventDefault();
        update({...data, status: 0});
        const result = await scrapeMenu(data.url)
        console.log(result)
        update({restaurant: result, url: '', status: 1});
    }

    const inputHandler = (input) => {
        console.log(input)
        update({...data, url: input})
    }
    
    return (
        <div className="scraper">
            <Nav code='https://github.com/nab115/menu-scraper'/>
            <div className='scraper-header content-container padded'>
                <h2>Menu Scraper</h2>
                <div className="scraper-body">
                    <p>
                        This page allows you to try out my custom-built
                        restaurant menu scraper. Currently, menu-scraper
                        is capable of automatically extracting item name,
                        description, and price from HTML menus. Click
                        'View Code' above to see the code in GitHub and learn
                        more about it.
                        <br></br>
                        <br></br>
                        If you have the URL of an HTML menu, enter it below and
                        see if menu scraper is able to correctly parse the menu! 
                        If you want an example of an HTML menu my tool works on, try 
                        <span className="bold"> https://www.elmoose.com/dinner</span>
                    </p>
                    <form onSubmit={submitHandler} autoComplete="off" className="form-container">
                        <span className="url-input">
                                <SearchBar inputHandler={inputHandler}/>
                        </span>
                        <button className="scraper-btn">
                            Try it
                        </button>
                    </form>
                    <Preview status={data.status} restaurant={data.restaurant}/>
                </div>
            </div>
            <div className='search-footer'>Created by <a href='https://www.naranbabha.com/'>Naran Babha</a></div>
        </div>
        );
}

function Preview({status, restaurant}) {
    if(status == -1){
        return <div></div>
    }
    else if (status == 0){
        return <div>Loading - this will take a few seconds.</div>
    }
    else {
        return (
            <div className="scraper-preview">
                <RestaurantCard restaurant={restaurant}/>
            </div>
        )
    }
}

export default MenuScraperPage