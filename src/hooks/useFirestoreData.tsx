import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase"; // assuming firebase configuration is already set up

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
    const fetchData = async () => {
      const q = query(collection(db, collectionName), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc: QueryDocumentSnapshot<FirestoreData>) => {
        setData(doc.data());
        setLoading(false);
      });
    };

    fetchData();
  }, [collectionName, uid]);

  return [data, loading];
};
