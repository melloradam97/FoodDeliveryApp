import React from "react";
import { Token } from "../../../services/order/orderService";
import { CreditCardInput } from "react-native-input-credit-card";

export const CardInput = ({ name = "Adam" }) => {
  const onChange = async (data) => {
    const { values, status } = data;
    const checkCompletion = Object.values(status).includes("incomplete");
    console.log(checkCompletion);
    const expiryDate = values.expiry.split("/");
    const cardDetails = {
      number: values.number,
      exp_month: expiryDate[0],
      exp_year: expiryDate[1],
      cvc: values.cvc,
      name: name,
    };

    const details = await Token(cardDetails);
  };
  return <CreditCardInput onChange={onChange} />;
};
