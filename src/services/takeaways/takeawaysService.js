import react from "react";
import camelize from "camelize";
import { mocks, mockImages } from "./mock";

export const takeawaysRequest = (loc = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[loc];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const takeawaysTrans = ({ results = [] }) => {
  const mappedRes = results.map((takeaway) => {
    takeaway.photos = takeaway.photos.map((p) => {
      return mockImages[Math.trunc(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...takeaway,
      isOpenNow: takeaway.opening_hours && takeaway.opening_hours.open_now,
      isClosedTemporarily: takeaway.business_status === "CLOSED_TEMPORARILY",
      address: takeaway.vicinity,
    };
  });
  return camelize(mappedRes);
};
