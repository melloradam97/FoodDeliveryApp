import camelize from "camelize";

import { locations } from "./locationMock";

export const locRequest = (searchedTerm) => {
  return new Promise((resolve, reject) => {
    const locMock = locations[searchedTerm];
    if (!locMock) {
      reject("not found");
    }
    resolve(locMock);
  });
};

export const locTrans = (res) => {
  const { geometry = {} } = camelize(res.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
