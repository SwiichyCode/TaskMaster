import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  setPersistence,
  UserCredential,
} from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

interface UserType {
  email: any;
  uid: any;
}

type AuthContextType = {
  user: UserType | null;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  signUp: () => {},
  logIn: () => Promise.resolve({} as UserCredential),
  logOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserType | null>(null);
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
      board: [],
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

  const value = { user, signUp, logIn, logOut };

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
