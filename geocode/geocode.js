const request = require('request');


//Function that gets the geocode address from google maps API
geocodeAddress = (address, callback) => {
    //encode our passed in arg so we can request a URL
    var encodedAddress = encodeURIComponent(address);
    
    //request URL for specific address, return json
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`, 
        json: true,

        //use callbacks to return errors or results depending on condition
    }, (error, response, body) => {
        if (error) {
            //check if error objects exists
            callback('unable to connect to google servers')
        }
        else if (body.status === 'ZERO_RESULTS'){
            callback('Unable to find address.');
        }
    
        else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            }); 
            return geocodeAddress.latitude    
        }
    })

}

//export our function
module.exports = {
    geocodeAddress,
}