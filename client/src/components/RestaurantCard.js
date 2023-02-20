import React, {useState} from "react";

function RestaurantCard({restaurant}) {
    return (
        <div className="rest-card">
            <div className="rest-header">
                <h3 className="no-margin">{restaurant.name}</h3>
                <p className="no-margin">{restaurant.address}</p>
            </div>
            <div className="rest-items">
                {restaurant.items.map(item => <Item item={item} />)}
            </div>
        </div>
    )
  }
  
function Item({item}) {
    let price = null

    try{
        price = item.price.toFixed(2);
    } catch(error) {

    }
    return (
        <div className="item">
        <span className="item-name">{item.name}</span>
        <span className="item-price"><span>{price}</span></span>
        <p className="item-desc">{item.description}</p>
        </div>
    )
}

export default RestaurantCard;