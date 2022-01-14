import camelize from "camelize";

export const locRequest = (searchedTerm) => {
  return fetch(
    `https://us-central1-fooddeliveryapp-fe60d.cloudfunctions.net/geocodingAPI?city=${searchedTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locTrans = (res) => {
  console.log(res);
  const { geometry = {} } = camelize(res.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
