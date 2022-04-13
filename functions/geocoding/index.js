const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodingReq = (req, res, client) => {
  const { city } = url.parse(req.url, true).query;

  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((response) => {
      return res.json(response.data);
    })
    .catch((e) => {
      res.status(400);
      return res.send(e.res.data.error_message);
    });
};
