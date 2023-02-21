import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/form/Input";
import { Button } from "../components/global/Button";
import {
  doc,
  getDocs,
  collection,
  where,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { Header } from "../components/dashboard/Header";
import { DashboardWrapper } from "../components/wrappers/DashboardWrapper";
import styled from "styled-components";

export const Dashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState<any>([]);

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setData(data);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const addProject = async (e: any) => {
    try {
      const docRef = await setDoc(doc(db, "users", user.uid), {
        ...user,
        projects: [
          {
            name: "project 1",
            tasks: [
              {
                name: "task 1",
                description: "description 1",
                status: "todo",
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [user]);

  return (
    <DashboardWrapper>
      <Header />
      <Container>
        <Input type="text" placeholder="name project" />
        <Button text="Create" onClick={(e) => addProject(e)} />
      </Container>
    </DashboardWrapper>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #060b27;
  color: var(--color-white);
  padding: 1.6rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-width: 40rem;
  }
`;
