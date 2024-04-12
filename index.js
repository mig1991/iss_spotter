const { fetchCoordsByIP } = require('./iss');

const ipAddress = "209.205.68.6";


// fetchCoordsByIP(ipAddress, (error, coordinates) => {
//   if (error) {
//     console.error('Error:', error);
//     return;
//   }
  
//   console.log('Latitude:', coordinates.latitude);
//   console.log('Longitude:', coordinates.longitude);
// });