import React, {useState} from "react";

function RestaurantCard({restaurant}) {
    return (
      <div className="restaurantCard">
        <div className="restaurantCardContent">
          <div className="restaurantHeader">
            <h3 className="no-margin">{restaurant.name}</h3>
            <p className="no-margin">{restaurant.address}</p>
          </div>
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
        <span className="itemName">{item.name}</span>
        <span className="itemPrice"><span>{price}</span></span>
        <p className="itemDescription">{item.description}</p>
        </div>
    )
}

export default RestaurantCard;