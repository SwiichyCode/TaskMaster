import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  sendEmailVerification,
} from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

interface UserType {
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);

    await addDoc(collection(db, "users"), {
      email: email,
    });
  };

  const logIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    auth.setPersistence(browserLocalPersistence);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
