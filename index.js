const { fetchCoordsByIP } = require("./iss");

const coords = { latitude: "49.27670", longitude: "-123.13000" }; // Replace with your actual coordinates


// fetchCoordsByIP(coords, (error, coordinates) => {
//   if (error) {
//     console.error('Error fetching coordinates:', error);
//     return;
//   }

//   console.log('Coordinates:', coordinates);

const { fetchISSFlyOverTimes } = require("./iss");


fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
  if (error) {
    console.error("Error", error);
    return;
  }

  console.log("ISS flyover times:", flyOverTimes);
});

