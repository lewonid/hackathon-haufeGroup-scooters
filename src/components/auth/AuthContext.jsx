// AuthContext.js THIS COMPONENTED IS USED TO CREATE A CONTEXT FOR THE AUTHENTICATION
// and to provide the context to the rest of the app
// easy. just import the AuthContext and useContext hook in the component you want to use it in

import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../utils/firebase";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // seet an observer on the Auth object to listen to the user's sign-in state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  AuthProvider.propTypes = {
    children: PropTypes.node, // this is to fix the "no-unused-prop-types" ESLint error
  };

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
