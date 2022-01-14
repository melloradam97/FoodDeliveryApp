const functions = require("firebase-functions");
const { geocodingReq } = require("./geocoding");
const { placesReq } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.geocodingAPI = functions.https.onRequest((request, response) => {
  geocodingReq(request, response, client);
});

exports.placesAPI = functions.https.onRequest((request, response) => {
  placesReq(request, response, client);
});
