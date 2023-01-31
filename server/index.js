const express = require('express');
const { MongoClient } = require("mongodb");

const path = require('path');
const {searchData} = require('./parser.js');



const port = process.env.PORT || 3001;
const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();
const dbName = "Restaurants";
const db = client.db(dbName);
const col = db.collection("restaurants");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// console.log(process.env);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

app.post("/search", async (req, res) => {
  var restaurants = [];
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