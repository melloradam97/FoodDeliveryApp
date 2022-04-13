import React, { useState, createContext, useEffect } from "react";

import { locRequest, locTrans } from "./locationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [place, setPlace] = useState("London");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (p) => {
    setLoading(true);
    setPlace(p);
  };

  useEffect(() => {
    if (!place.length) {
      return;
    }
    locRequest(place.toLowerCase())
      .then(locTrans)
      .then((res) => {
        setLoading(false);
        setLocation(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [place]);

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        error,
        search: onSearch,
        place,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
