import { Suspense } from "react";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreData } from "../../hooks/useFirestoreData";
import { DashboardHeader } from "../organims/DashboardHeader";
import { Aside } from "../organims/Aside";
import { EmptyBoard } from "../molecules/EmptyBoard";
import { DashboardWrapper } from "../templates/DashboardWrapper";
import styled from "styled-components";

export const Dashboard = () => {
  const { user } = useAuth();
  const [data, loading] = useFirestoreData("users", user?.uid);
  const projectDocument = useFirestoreData("projects", user?.uid);

  return (
    <DashboardWrapper>
      <DashboardHeader />
      <Container>
        <Suspense fallback={"Loading..."}>
          <Aside data={data} loading={loading} />
        </Suspense>

        <Board>{data?.board?.length === 0 && <EmptyBoard data={data} />}</Board>
      </Container>
    </DashboardWrapper>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 96px);
  background-color: #060b27;
  color: var(--color-white);

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-width: 40rem;
  }
`;

const Board = styled.div`
  width: 100%;
  padding: 1.6rem;
`;
