import React, { useState, useContext, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/authContext";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [order, setOrder] = useState([]);
  const [takeaway, setTakeaway] = useState(null);

  const addOrder = (i, tAway) => {
    if (!takeaway || takeaway.placeId !== tAway.placeId) {
      setTakeaway(tAway);
      setOrder([i]);
    } else {
      setOrder([...order, i]);
    }
  };

  const emptyOrder = () => {
    setOrder([]);
    setTakeaway([]);
  };

  return (
    <OrderContext.Provider
      value={{
        addToOrder: addOrder,
        emptyTheOrder: emptyOrder,
        takeaway,
        order,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
