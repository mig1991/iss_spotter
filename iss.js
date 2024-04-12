const request = require('request');


const fetchISSFlyOverTimes = function(coords, callback) {
  const { latitude, longitude } = coords;
  
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  
  request(url, { json: true }, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS fly over times: ${body}`), null);
      return;
    }

    if (body.message !== "success") {
      callback(Error(`Failed to fetch ISS fly over times: ${body.message}`), null);
      return;
    }

    callback(null, body.response);
  });
};

module.exports = { fetchISSFlyOverTimes };