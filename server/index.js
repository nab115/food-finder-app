const express = require('express')
const app = express()
const port = 3001

testData = {
  restaurants: ["Slab", "Redhook"]
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/search", (req, res) => {
  res.json(testData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})