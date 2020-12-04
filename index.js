const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
//const { json } = require("body-parser");

const localData = require("./localData.json");
let port = process.env.PORT || 3000;
const app = express();

// using cors with no arguments, therefore api can be fetched from any server.
app.use(cors());

//define an object that will contain the database and be updated once a day
let breweries = {};

//fetch data form googles firestore cloud service
async function fetchBreweries() {
  try {
    //get data from cloud and set it to breweries const
    const response = await fetch(
      "https://us-central1-brugg-api-5b2c1.cloudfunctions.net/brewery"
    );
    response.json().then((data) => {
      //set breweries equal to data
      breweries = data;
      //log the first breweries first beers name
      console.log(breweries[1].catalog[0].beerName);
    });
    //log that the api data was fetched successfully at
    console.log(`Data successfully fetched at ${Date()}`);
  } catch (err) {
    console.log("fetch failed");
  }
}

//use static files from /public folder
app.use(express.static(__dirname + "/public"));

//endpoints defined
app.get("/breweries", (req, res) => {
  res.json(breweries);
});

app.get("/beers", (req, res) => {
  res.json(localData);
});

//get api data
fetchBreweries();

//update api data einusinni á sólarhring
//setInterval(fetchBreweries, 1000 * 60 * 60 * 24);

//update api data every 60 seconds for testing
setInterval(fetchBreweries, 1000 * 60);

//set port to
app.listen(port, () => {
  console.log(`API is up and running and listening on port ${port}`);
});
