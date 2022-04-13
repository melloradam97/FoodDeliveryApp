const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodingReq = (request, response, client) => {
  const { city } = url.parse(request.url, true).query;

  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
