import { useAuth } from "../../context/AuthContext";
import { useFirestoreData } from "../../hooks/useFirestoreData";
import { DashboardHeader } from "../organims/DashboardHeader";
import { Aside } from "../organims/Aside";
import { DashboardWrapper } from "../templates/DashboardWrapper";
import styled from "styled-components";

export const Dashboard = () => {
  const { user } = useAuth();
  const [users, loadingUser] = useFirestoreData("users", user?.uid);
  const [projects, loadingProject] = useFirestoreData("projects", user?.uid);

  const board = projects?.board || [];

  return (
    <DashboardWrapper>
      <DashboardHeader />
      <Container>
        <Aside data={users} projects={board} loading={loadingUser} />

        {/* <Board>{data?.board?.length === 0 && <EmptyBoard data={data} />}</Board> */}
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
