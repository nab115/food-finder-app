const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const dbName = "menu-items";

async function run() {
  try {
    await client.connect();
    console.log("Connected to database");
    const db = client.db(dbName);
    const col = db.collection("items");

    let item = {
        name: "Burratta Sandwich"
        , description : "tomato, radicchio, Mama Lil's peppers, balsamic"
        , price : 12.00
        , restaurantID : 0
    }   

    // const p = await col.insertOne(item);

    const cursor = col.find({name: "Burratta Sandwich"});

    // const cursor = await col.deleteOne({name: "Burratta Sandwich"});

    await cursor.forEach(console.dir);

  } catch (err) {
      console.log(err.stack);
  }
  finally {
      await client.close();
  }
}

run();