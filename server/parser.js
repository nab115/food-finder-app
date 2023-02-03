function isMatch(item, name) {
    return name.includes(item);
}

function searchData(target, restaurants) {
    results = [];
    restaurants.forEach((restaurant) => {
        var matching_items = [];

        restaurant.items.forEach((item) => {
            if (isMatch(target, item.name)) {
                matching_items.push(item);
            }
        })

        restaurant.items = matching_items;
        console.log(restaurant);
        if (matching_items.length != 0) results.push(restaurant);
    })

    return results;
}

module.exports.searchData = searchData;