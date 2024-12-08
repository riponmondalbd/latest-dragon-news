import {
  getAuth,
  GithubAuthProvider,
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
  const gitHubProvide = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //   google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const gitHubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvide);
  };

  // logout user
  const logOut = () => {
    setLoader(true);
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

  const authInfo = { user, loader, googleLogin, logOut, gitHubLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
