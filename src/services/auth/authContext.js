import React, { createContext, useState, useEffect } from "react";
import { loginReq } from "./authService";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const login = (email, password) => {
    setLoading(true);

    loginReq
      .then((user) => {
        setLoading(false);
        setUser(user);
      })
      .catch((e) => {
        setLoading(false);
        setErr(e);
        console.error(e);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        err,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
