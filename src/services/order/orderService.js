import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KJG0TJcL2tR1g0Hg012ulKXsakXKEebKGO22D3PQh0ofs7WW81BAwFnzkaSyaPya9aYLFxzNMA5YvTdUw2pogSy00fukiA3jq"
);

export const Token = (card) => {
  stripe.createToken({ card });
};

export const paymentReq = (
  name,
  cardNumber,
  expiryMonth,
  expiryYear,
  securityNumber,
  total
) => {
  return fetch("http://10.0.2.2:3000/api/cardInfo", {
    body: JSON.stringify({
      name,
      cardNumber,
      expiryMonth,
      expiryYear,
      securityNumber,
      total,
    }),
    method: "POST",
  }).then((response) => {
    if (response.status > 200) {
      return Promise.reject("Error processing the payment");
    }
    return response.json();
  });
};
