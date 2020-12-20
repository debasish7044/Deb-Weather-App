const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d7f03f579663a1d5b1b2ee74d1f3d041&units=metric`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect with server');
    } else if (body.cod === '400') {
      callback('unable to find location');
    } else {
      callback(
        undefined,
        `Today  ${body.name} temperature is ${body.main.temp} degree celsius (${body.weather[0].main})`
      );
    }
  });
};

module.exports = forecast;
