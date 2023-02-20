import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import { Header } from "./components/layouts/Header";
import styled from "styled-components";

export const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {user.uid && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #060b27;
`;
