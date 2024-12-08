import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //   google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logOut = () => {
    return signOut(auth);
  };

  //   get current user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current State", currentUser);

      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loader, googleLogin, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
