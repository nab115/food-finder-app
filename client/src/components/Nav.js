import React from "react";

function Nav({code}) {
    return (
    <div className='nav content-container'>
        <span className="nav-btn"><a className='no-dec' href={code}>View Code</a></span>
        <span className="nav-btn"><a className='no-dec' href='/search'>Search</a></span>
        <span className="nav-btn"><a className='no-dec' href='/scraper'>Menu Scraper</a></span>
    </div>
    )
}

export default Nav