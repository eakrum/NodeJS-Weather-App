const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        url:`https://api.darksky.net/forecast/7a7e2be7270eb5d864c4cfc0dffd686f/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forecast.io servers');
        } 
        else if (response.statusCode === 404) {
            callback('Unable to fetch weather')
        } 
        else if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    
        else {
            callback('Bad request')
        }
    });

}

module.exports.getWeather  = getWeather



