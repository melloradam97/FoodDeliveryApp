import camelize from "camelize";

export const takeawaysRequest = (loc) => {
  return fetch(
    `https://us-central1-fooddeliveryapp-fe60d.cloudfunctions.net/placesAPI?location=${loc}`
  ).then((res) => {
    return res.json();
  });
};

export const takeawaysTrans = ({ results = [] }) => {
  const mappedRes = results.map((takeaway) => {
    return {
      ...takeaway,
      isOpenNow: takeaway.opening_hours && takeaway.opening_hours.open_now,
      isClosedTemporarily: takeaway.business_status === "CLOSED_TEMPORARILY",
      address: takeaway.vicinity,
    };
  });
  return camelize(mappedRes);
};
