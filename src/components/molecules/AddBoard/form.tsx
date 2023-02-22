import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useAuth } from "../../../context/AuthContext";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setOpen?: () => void;
}

export const Form = ({ setOpen }: FormProps) => {
  const { user } = useAuth();
  const [name, setName] = useState("");

  const addProject = async (e: any) => {
    e.preventDefault();

    try {
      const newProject = { name, id: uuidv4() };
      const docRef = doc(db, "projects", user?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const exixstingData = docSnap.data();
        const existingBoard = exixstingData?.board || [];
        const newBoard = [...existingBoard, newProject];
        await setDoc(docRef, { board: newBoard }, { merge: true });
      } else {
        await setDoc(docRef, { uid: user?.uid, board: [newProject] });
      }

      setOpen && setOpen();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container>
      <Input
        placeholder="eg.portfolio"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button theme="primary" text="Add Board" onClick={(e) => addProject(e)} />
    </Container>
  );
};

const Container = styled.form``;
