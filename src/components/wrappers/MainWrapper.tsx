import React from "react";
import styled from "styled-components";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 2.4rem;
`;
