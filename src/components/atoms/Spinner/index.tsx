import styled from "styled-components";

export const Spinner = () => {
  return <StyledSpinner></StyledSpinner>;
};

const StyledSpinner = styled.div`
  border: 7px solid #f3f3f3;
  border-top: 7px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
