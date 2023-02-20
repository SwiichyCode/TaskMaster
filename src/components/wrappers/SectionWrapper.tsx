import React from "react";
import styled from "styled-components";

export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  width: 100%;
  max-width: 114.5rem;
  padding: 7rem 0;

  @media (max-width: 768px) {
    padding: calc(7rem / 2) 0;
  }
`;
