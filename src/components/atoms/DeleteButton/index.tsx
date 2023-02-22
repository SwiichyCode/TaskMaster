import React from "react";
import styled from "styled-components";

interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DeleteButton = ({ ...props }: DeleteButtonProps) => {
  return (
    <StyledButton {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
      </svg>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 2.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    width: 1.5rem;
    fill: red;
  }
`;
