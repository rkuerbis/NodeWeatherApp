const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for:',
      string: true
    }


  })
  .help()
  .alias('help', 'h')
  .argv;

//console.log(argv);
var location = {};


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {

    console.log(`Address results: \n${JSON.stringify(results, undefined, 2)}\n`);
    location = {
      latitude: results.latitude,
      longitude: results.longitude
    };
//    console.log("location1:",location);
//    console.log(JSON.stringify(results, undefined, 2));
//    console.log("location2:",location);

    if(location) {

      weather.getWeather(location, (errorMessage, results1) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`Dark Sky App Weather Results: \n${JSON.stringify(results1, undefined, 2)}\n`);
        }
      });
    };
  }
});
