const express = require('express');
const axios = require('axios');

const path = require('path');

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'development') api_url = 'http://localhost:5000'
else api_url = 'https://menu-monster-api-production.up.railway.app'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));


// using '*' to route any unhandled requests back to the frontend router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

app.post("/search", (req, res) => {
    axios.post(
        api_url + '/itemsearch'
        , {
            city: req.body.city
            , item: req.body.item
        }
        , {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        res.json(response.data);
    })
});

app.post("/searchLocation", async (req, res) => {
    axios.post(
        api_url + '/locationsearch'
        , {
            city: req.body.city
        }
        , {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        res.json(response.data);
    })
});

app.post("/locations", async (req, res) => {
  axios.get(api_url + '/locations')
  .then((response) => {
        data = []
        response.data.forEach((loc) => {
            data.push({
                value: loc
                , display: loc
            })
        })
        res.json(data);
    })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})