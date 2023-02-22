import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { useAuth } from "../../../context/AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";

interface FormProps {
  setOpen?: () => void;
}

export const Form = ({ setOpen }: FormProps) => {
  const { user } = useAuth();
  const [name, setName] = useState("");

  const addProject = async (e: any) => {
    e.preventDefault();

    try {
      const docRef = await setDoc(doc(db, "projects", user?.uid), {
        uid: user?.uid,
        board: [
          {
            name: name,
            id: "1",
          },
        ],
      });
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
