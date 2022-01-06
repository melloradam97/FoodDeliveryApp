import React, { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt4CtKD3msgMd314ANxGQZjK5YT5AFYPc",
  authDomain: "fooddeliveryapp-fe60d.firebaseapp.com",
  projectId: "fooddeliveryapp-fe60d",
  storageBucket: "fooddeliveryapp-fe60d.appspot.com",
  messagingSenderId: "333051616644",
  appId: "1:333051616644:web:540406a62e1b5db68251d1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginReq = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerReq = async (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// export const authReq = async (user) => onAuthStateChanged(auth, user);

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
    } else {
      return;
    }
  });

  const login = (email, password) => {
    loginReq(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setErr(e.toString());
        console.error(e);
      });
  };

  const register = (email, password, rPassword) => {
    if (password !== rPassword) {
      setErr("Passwords do not match");
      return;
    }
    registerReq(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setErr(e.toString());
        console.error(e);
      });
  };

  const logout = () => {
    setUser(null);
    auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        err,
        login,
        register,
        logout,
        isAuth: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
