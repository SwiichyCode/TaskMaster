import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  sendEmailVerification,
  setPersistence,
  UserCredential,
} from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

interface UserType {
  email: any;
  uid: any;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser({ email: user?.email, uid: user?.uid });
    });
    setLoading(false);

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user?.uid,
      email: user?.email,
    });
  };

  const logIn = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return setPersistence(auth, browserLocalPersistence).then(() =>
      signInWithEmailAndPassword(auth, email, password)
    );
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
