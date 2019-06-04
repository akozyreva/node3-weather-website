const request = require('request')
const forecast = (lat, long, callback) => {
  const url =`https://api.darksky.net/forecast/00dfabea84ee5d0c8dff9cdfebe95ca6/${lat},${long}?units=si`
  request({ url, json:true }, (error, { body }) => {
    if (error) {
      callback("Unable to locate to weather service", undefined)
    } else if (body.error) {
      // for example, invalid request
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} It's currently ${body.currently.temperature} degreess out. There is a ${body.currently.precipProbability}% chance of rain`)
    }
  })
}

module.exports = forecast
