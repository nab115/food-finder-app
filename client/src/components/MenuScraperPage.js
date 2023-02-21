import React, {useState} from "react";
import Nav from './Nav.js';
import SearchBar from './SearchBar.js'
import RestaurantCard from './RestaurantCard.js'
import CopyButton from "./CopyButton.js";
import { scrapeMenu } from '../request.js';

function MenuScraperPage() {

    const [data, update] = useState({restaurant: null, url: '', status: 0, trigger: 0});

    const example_link = 'https://www.elmoose.com/dinner';

    const submitHandler = async (e) => {
        e.preventDefault();
        update({...data, status: 1, trigger: -1});
        const result = await scrapeMenu(data.url)
        if (result == null ) {
            update({...data, status: -1});
        }
        else {
            update({...data, restaurant: result, status: 2});
        }
    }

    const inputHandler = (input) => {
        update({...data, url: input, trigger: 0})
    }
    
    return (
        <div className="scraper">
            <Nav code='https://github.com/nab115/menu-scraper'/>
            <div className='scraper-header content-container padded'>
                <h2>Menu Scraper</h2>
                <div className="scraper-body">
                    <p className="scraper-desc">
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
                        <tt className="bold"> {example_link}
                            <CopyButton text={example_link}/>
                        </tt>
                        
                    </p>
                    <form onSubmit={submitHandler} autoComplete="off" className="form-container">
                        <span className="url-input">
                                <SearchBar inputHandler={inputHandler} trigger={data.trigger}/>
                        </span>
                        <button className="scraper-btn">Go</button>
                    </form>
                    <Preview status={data.status} restaurant={data.restaurant}/>
                </div>
            </div>
            <div className='search-footer'>Created by <a href='https://www.naranbabha.com/'>Naran Babha</a></div>
        </div>
        );
}

function Preview({status, restaurant}) {
    if(status == 0){
        return <div></div>
    }
    else if (status == 1){
        return <div>Loading - this will take a few seconds.</div>
    }
    else if (status == 2){
        return (
            <div className="scraper-preview">
                <RestaurantCard restaurant={restaurant}/>
            </div>
        )
    }
    else if (status == -1) {
        return <div>Error - could not parse menu from given URL</div>
    }
    else {
        return <div></div>
    }
}

export default MenuScraperPage