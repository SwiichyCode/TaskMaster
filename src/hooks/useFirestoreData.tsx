import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export interface FirestoreData {
  [key: string]: any;
}

type FirestoreDataHookResult = [FirestoreData | null, boolean];

export const useFirestoreData = (
  collectionName: string,
  uid: string
): FirestoreDataHookResult => {
  const [data, setData] = useState<FirestoreData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, collectionName), where("uid", "==", uid)),
      (querySnapshot) => {
        let data: FirestoreData = {};
        querySnapshot.forEach((doc) => {
          data = doc.data();
        });
        setData(data);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [collectionName, uid]);

  return [data, loading];
};
