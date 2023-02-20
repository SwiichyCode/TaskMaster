import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container>
      {/* <button onClick={logOutHandler}>logout</button> */}
      <span>{user.email}</span>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #060b27;
`;
