const express = require('express');

const path = require('path');
const {col} = require('./db.js')
const {searchData} = require('./parser.js');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

const locations = [
  {value: 'Seattle', display: 'Seattle, WA'}
  , {value: 'Philadelphia', display: 'Philadelphia, PA'}
]


// using '*' to route any unhandled requests back to the frontend router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

// search for specific menu item in a city
app.post("/search", async (req, res) => {
    var restaurants = [];
    const cursor = col.find({'city' : req.body.city});
    await cursor.forEach((r) => {
        restaurants.push(r)
    });

    res.json(searchData(req.body.item, restaurants));
});

// TODO - only retrieve 20, sorted by rating or avg. price

// retreive all menu items from all restaurants in a city
app.post("/searchLocation", async (req, res) => {
    var restaurants = [];
    const cursor = col.find({'city' : req.body.city});
    await cursor.forEach((r) => {
        restaurants.push(r)
    });
  
    res.json(restaurants);
});

app.post("/locations", async (req, res) => {
  res.json(locations);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})