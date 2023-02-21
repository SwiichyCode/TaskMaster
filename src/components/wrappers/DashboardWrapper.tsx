import React from "react";
import styled from "styled-components";

export const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #060b27;
`;
