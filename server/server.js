const express = require('express')
const app = express()
const port = 5000

// For testing purposes
const dth11Data =  [
  [ "Id", "Time", "Humidity", "Temperature" ],
  [ 1, Date.now(), 54, 28 ],
  [ 2, Date.now(), 54, 29 ],
  [ 3, Date.now(), 55, 29 ]
]

app.get("/api", (req, res) => {
  res.json(dth11Data)
});

app.listen(port, () => { console.log("Server started on port " + port) })