const url = require("url");
const functions = require("firebase-functions");

const addGoogleImg = (takeaway) => {
  const reference = takeaway.photos[0].photo_reference;
  takeaway.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${
      functions.config().google.key
    }`,
  ];
  return takeaway;
};

module.exports.placesReq = (req, res, client) => {
  const { location } = url.parse(req.url, true).query;
  client
    .placesNearby({
      params: {
        type: "restaurant",
        radius: 1750,
        location: location,
        key: functions.config().google.key,
      },
      timeout: 1500,
    })
    .then((response) => {
      response.data.results = response.data.results.map(addGoogleImg);
      return res.json(response.data);
    })
    .catch((e) => {
      res.status(400);
      return res.send(e.res.data.error_message);
    });
};
