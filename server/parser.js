function isMatch(item, name) {
    return name.includes(item);
}


module.exports = {
    searchData: function (item, restaurants) {

        results = [];
        restaurants.forEach((restaurant) => {
            var match = false;
            for (var i = 0; i < restaurant.items.length; i++) {
                if (!isMatch(item, restaurant.items[i].name)) {
                    restaurant.items.splice(i, 1);
                }
                else match = true;
            }

            if (match) results.push(restaurant);
        })

        return results;
    }
};