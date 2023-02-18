const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://naranbabha:kIIsQuR1FBhqAO8v@menuitems.wdbco70.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const dbName = "Restaurants";

// testData = [
//     {
//       name: "Slab Sandwich"
//       , address : "1201 10th Ave, Seattle, WA 98122"
//       , city : "Seattle"
//       , items : [
//         {
//           name: "Pork Belly Sandwich"
//           , description : "delicate pork belly on house-made cibatta"
//           , price : 14.00
//         }
//         , {
//           name: "Burratta Sandwich"
//           , description : "tomato, radicchio, Mama Lil's peppers, balsamic"
//           , price : 12.00
//         }
//         , {
//           name: "FRIED CHICKEN SANDWICH"
//           , description : "ghost pepper ranch dressing, cabbage slaw, house made pickles"
//           , price : 13.00
//         }
//       ]
//     }
//     , {
//       name: "Redhook Brewlab"
//       , address : "714 E Pike St. Seattle, WA 98122"
//       , city : "Seattle"
//       , items : [
//         {
//           name: "Cheeseburger"
//           , description : "1/4 pound smash burger with sharp cheddar"
//           , price : 14.00
//         }
//         , {
//           name: "Kobo Pizza"
//           , description : "detroit style pizza with sausage and spicy red sauce"
//           , price : 12.00
//         }
//       ]
//     }
//     , {
//       name: "Ayutthaya Thai Restaurant and Bar"
//       , address : "727 East Pike Street, Seattle, WA 98122"
//       , city: "Seattle"
//       , items : [
//         {
//           name: "PAD KHEE MAO"
//           , description : "wok tossed wide noodles w/ garlic-chili paste, mixed vegetables & egg"
//           , price : 13.00
//         }
//         , {
//           name: "SPICY BASIL EGGPLANT"
//           , description : "onions, mushrooms, carrots, zucchini, peppers, basil, red curry paste"
//           , price : 12.50
//         }
//       ]
//     }
//   ]

testData = [
    {
      name: "Little Nonna's"
      , address : "1234 Locust St, Philadelphia, PA 19107"
      , city : "Philadelphia"
      , items : [
        {
          name: "Caesar Salad"
          , description : "warm polenta croutons, charred broccoli, gem lettuce, radicchio, parmesan, lemon-anchovy dressing"
          , price : 12.00
        }
        , {
          name: "Rigatoni Alla Vodka"
          , description : "house ground garlic sausage, local greens, buffalo mozzarella, crispy prosciutto"
          , price : 21.00
        }
        , {
          name: "Braised Short Rib"
          , description : "short rib ragu, roasted celery root, brussels sprout leaves, mushrooms, whipped ricotta, breadcrumbs, fresh horseradish"
          , price : 21.00
        }     
        , {
            name: "Eggplant Parmigiana"
            , description : "japanese eggplant, burrata, marinara, basil-walnut pesto"
            , price : 14.00
          }
      ]
    }
    , {
      name: "El Vez"
      , address : "121 S 13th St, Philadelphia, PA 19107"
      , city : "Philadelphia"
      , items : [
        {
          name: "Baja Shrimp Tacos"
          , description : "negra modelo beer batter, cabbage, pico de gallo, cremayo"
          , price : 16.00
        }
        , {
          name: "Chicken Enchiladas"
          , description : "crema fresca, radish, cotija cheese"
          , price : 15.00
        }
      ]
    }
    , {
      name: "Cheu Fishtown"
      , address : "1416 Frankford Ave, Philadelphia, PA 19125"
      , city: "Philadelphia"
      , items : [
        {
          name: "SPICY TUNA RICE CRACKER"
          , description : "green chili guac [four]"
          , price : 14.00
        }
        , {
          name: "MISO RAMEN"
          , description : "pork shoulder, soy egg, black garlic, arugula"
          , price : 19.00
        }
      ]
    }
    , {
        name: "Pasta Casalinga"
        , address : "93 Pike St #201, Seattle, WA 98101"
        , city : "Seattle"
        , items : [
          {
            name: "From the Ocean"
            , description : "Paccheri with marinated artichokes, calamari, capers and lemoni breadcrumbs"
            , price : 19.00
          }
          , {
            name: "From the Farm"
            , description : "Rigatoni with speck, radicchio Chioggia, ricotta and walnut"
            , price : 21.00
          }
          , {
            name: "From the Garden"
            , description : "Conchiglie rigate with carrot-ginger puree, ricotta salata, African cayenne and Nigella seeds"
            , price : 21.00
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