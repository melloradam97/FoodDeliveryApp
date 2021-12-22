import React, {
  useMemo,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";

import { takeawaysRequest, takeawaysTrans } from "./takeawaysService";
import { LocationContext } from "../location/locationContext";

export const TakeawaysContext = createContext();

export const TakeawaysContextProvider = ({ children }) => {
  const [takeaways, setTakeaways] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const fetchTakeaways = (loc) => {
    setLoading(true);
    setTakeaways([]);
    setTimeout(() => {
      takeawaysRequest(loc)
        .then(takeawaysTrans)
        .then((res) => {
          setTakeaways(res);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 3000);
  };

  useEffect(() => {
    if (location) {
      const locString = `${location.lat},${location.lng}`;
      fetchTakeaways(locString);
    }
  }, [location]);
  return (
    <TakeawaysContext.Provider value={{ takeaways, loading, error }}>
      {children}
    </TakeawaysContext.Provider>
  );
};
