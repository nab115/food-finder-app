const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const dbName = "Restaurants";
const db = client.db(dbName);
const col = db.collection("restaurants");

module.exports.col = col;