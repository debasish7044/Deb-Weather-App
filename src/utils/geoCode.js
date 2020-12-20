const request = require('request');

const geoCode = (address, callback) => {
  const geoCodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGViYXNpc2g3MDQ0MjAwMTE1IiwiYSI6ImNraXR2NXN3MTBzamEzMm1tZXNnM3E3bnMifQ.Qs0dEV6fSkgdq46I_J673w&limit=1`;

  request({ url: geoCodingUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect with server :(');
    } else if (body.features.length === 0) {
      callback(`Sorry can't find location :(  Try another !`);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
