const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

//format our args using yargs
const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true,
    }

})
.help()
.help('help', 'h')
.argv;

//interface geocode function, chain callbacks and interface the get weather API
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(results.address)
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage)
            }
            else {
                console.log(`Its currently ${weatherResults.temperature} degrees. It feels like ${weatherResults.apparentTemperature} degrees`);
            }
        });
    }
});


