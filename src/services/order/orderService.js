import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KJG0TJcL2tR1g0Hg012ulKXsakXKEebKGO22D3PQh0ofs7WW81BAwFnzkaSyaPya9aYLFxzNMA5YvTdUw2pogSy00fukiA3jq"
);

export const Token = (cardDetails) => {
  stripe.createToken({ cardDetails });
};
