const request = require('request');

var getWeather = (location, callback) => {

//  console.log(`https://api.darksky.net/forecast/784024b798f89bf9b68345283aac76f6/${location.latitude},${location.longitude}`);

  request({

    url: `https://api.darksky.net/forecast/784024b798f89bf9b68345283aac76f6/${location.latitude},${location.longitude}`,
    json: true
  }, (error, response, body) => {
//      console.log(response);
    if (error) {
      callback('Unable to connect to Dark Sky Servers.');
    } else if (response.statusMessage !== 'OK') {
      callback('Unable to fetch weather for that location.');
    } else if (response.statusMessage === 'OK') {
//      console.log(response);
//      console.log("Body Dark Sky Weather:", body);
//      var results = JSON.stringify(body, undefined, 2);
//      console.log("Body Dark Sky Weather Results: ", results);

      callback(undefined,{
        address: body.timezone,
        latitude: body.latitude,
        longitude: body.longitude,
        temperature: body.currently.temperature
      });
    }
  });
};

//    } else if (response.statusMessage !== 'OK') {

module.exports = {
  getWeather
};
