const express = require('express');
const path = require('path');
const {searchData} = require('./parser.js');
const app = express();
const port = 3001;

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const dbName = "Restaurants";
const db = client.db(dbName);
const col = db.collection("restaurants");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

app.post("/search", async (req, res) => {
  var restaurants = [];
  await client.connect();
  const cursor = col.find({'city' : req.body.city});
  await cursor.forEach((r) => {
    restaurants.push(r)
  });
  
  console.log(restaurants);
  res.json(searchData(req.body.item, restaurants));

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})