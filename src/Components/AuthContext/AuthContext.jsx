import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import axios from "axios";
export const AuthProvider = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const registation = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post(
            "http://https://task-management-job-server.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log("token response", res.data))
          .catch((error) => console.error("Error setting token:", error));
      } else {
        axios
          .post(
            "http://https://task-management-job-server.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log("Logout success data", res.data))
          .catch((error) => console.error("Error logging out:", error));
      }
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    registation,
    signIn,
    singout,
    user,
    userUpdateProfile,
    loading,
    google,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};
export default AuthContext;
