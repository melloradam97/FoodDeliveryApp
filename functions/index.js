const functions = require("firebase-functions");
const { geocodingReq } = require("./geocoding");
const { placesReq } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

exports.geocodingAPI = functions.https.onRequest((request, response) => {
  geocodingReq(request, response, client);
});

exports.placesAPI = functions.https.onRequest((request, response) => {
  placesReq(request, response, client);
});
