const request = require('request');


const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipwhois.io/json/${ip}`, { json: true }, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates for IP: ${body}`), null);
      return;
    }

    if (!body.success) {
      callback(Error(`Invalid IP address: ${ip}`), null);
      return;
    }

    const { latitude, longitude } = body;

    callback(null, { latitude: latitude.toString(), longitude: longitude.toString() });
  });
};

module.exports = { fetchCoordsByIP };