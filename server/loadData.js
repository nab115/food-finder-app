const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const dbName = "Restaurants";

testData = [
    {
      name: "Slab Sandwich"
      , address : "1201 10th Ave, Seattle, WA 98122"
      , city : "Seattle"
      , items : [
        {
          name: "Pork Belly Sandwich"
          , description : "delicate pork belly on house-made cibatta"
          , price : 14.00
        }
        , {
          name: "Burratta Sandwich"
          , description : "tomato, radicchio, Mama Lil's peppers, balsamic"
          , price : 12.00
        }
        , {
          name: "FRIED CHICKEN SANDWICH"
          , description : "ghost pepper ranch dressing, cabbage slaw, house made pickles"
          , price : 13.00
        }
      ]
    }
    , {
      name: "Redhook Brewlab"
      , address : "714 E Pike St. Seattle, WA 98122"
      , city : "Seattle"
      , items : [
        {
          name: "Cheeseburger"
          , description : "1/4 pound smash burger with sharp cheddar"
          , price : 14.00
        }
        , {
          name: "Kobo Pizza"
          , description : "detroit style pizza with sausage and spicy red sauce"
          , price : 12.00
        }
      ]
    }
    , {
      name: "Ayutthaya Thai Restaurant and Bar"
      , address : "727 East Pike Street, Seattle, WA 98122"
      , city: "Seattle"
      , items : [
        {
          name: "PAD KHEE MAO"
          , description : "wok tossed wide noodles w/ garlic-chili paste, mixed vegetables & egg"
          , price : 13.00
        }
        , {
          name: "SPICY BASIL EGGPLANT"
          , description : "onions, mushrooms, carrots, zucchini, peppers, basil, red curry paste"
          , price : 12.50
        }
      ]
    }
  ]

async function run() {
  try {
    await client.connect();
    console.log("Connected to database");
    const db = client.db(dbName);
    const col = db.collection("restaurants");

    await col.insertMany(testData);

    // const p = await col.insertOne(item);

    // const cursor = col.findOne();

    // cursor.forEach(console.dir);

    // const cursor = await col.deleteOne({name: "Burratta Sandwich"});

    // await cursor.forEach(console.dir);

    // const cursor = col.find({name: 'Slab Sandwich'}).project({items: { $slice: -1}});

    // await cursor.forEach(console.dir);

  } catch (err) {
      console.log(err.stack);
  }
  finally {
      await client.close();
  }
}

run();