import React from "react";
import { Token } from "../../../services/order/orderService";
import { CreditCardInput } from "react-native-credit-card-input";

export const CardInput = ({ name, onSuccess }) => {
  const onChange = async (data) => {
    const { values, status } = data;
    const checkCompletion = Object.values(status).includes("incomplete");
    const expiryDate = values.expiry.split("/");

    const cardDetails = {
      number: values.number,
      exp_month: expiryDate[0],
      exp_year: expiryDate[1],
      cvc: values.cvc,
      name: name,
    };

    if (!checkCompletion) {
      const details = await Token(cardDetails);
      onSuccess(details);
    }
  };
  return <CreditCardInput onChange={onChange} />;
};
