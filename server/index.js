const express = require('express');
const {searchData} = require('./parser.js');
const app = express();
const port = 3001;

// import searchData from './parser';

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const dbName = "Restaurants";

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post("/search", async (req, res) => {
  // searchData(req.body.item);
  var restaurants = [];
  await client.connect();
  const db = client.db(dbName);
  const col = db.collection("restaurants");
  const cursor = col.find({'city' : req.body.city});
  // const cursor = col.find({'city' : {'$regex' : req.body.city, '$options' : 'i'}});
  await cursor.forEach((r) => {
    restaurants.push(r)
  });
  console.log(restaurants);
  res.json(searchData(req.body.item, restaurants));
  // res.json(restaurants);

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})