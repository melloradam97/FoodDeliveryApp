const { mocks, addMockImages } = require("./mock");
const url = require("url");
const functions = require("firebase-functions");

const addGoogleImg = (takeaway) => {
  const reference = takeaway.photos[0].photo_reference;
  if (!reference) {
    takeaway.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return takeaway;
  }
  takeaway.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${
      functions.config().google.key
    }`,
  ];
  return takeaway;
};

module.exports.placesReq = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImages);
    }

    return response.json(data);
  }
  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImg);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
