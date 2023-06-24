const express = require('express')
const app = express()
const port = 5000

const obj = { "users": [
  "userOne",
  "userTwo",
  "userThree",
  "userFour"
]}

const dth11Data =  [
  [ "Time", "Humidity", "Temperature" ],
  [ Date.now(), 54, 28 ],
  [ Date.now(), 54, 29 ],
  [ Date.now(), 55, 29 ]
]

app.get("/api", (req, res) => {
  res.json(dth11Data)
});

app.listen(port, () => { console.log("Server started on port " + port) })