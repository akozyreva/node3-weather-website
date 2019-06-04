const request = require('request')


const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiYWtvenlyZXZhIiwiYSI6ImNqdnhneTNkZjA0bWw0YW1yN2w3d2MwaXoifQ.csE8gLIlxj9QzXu0lGeUUg&limit=1`
  request({url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to the locations', undefined)
    } else if (!body.features.length) {
      callback("No results", undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geoCode
