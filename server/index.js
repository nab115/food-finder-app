const express = require('express');
const app = express();
const port = 3001;

testData = [
  {
    name: "Slab Sandwich"
    , address : "1201 10th Ave, Seattle, WA 98122"
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

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get("/search", (req, res) => {
  res.json(testData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})