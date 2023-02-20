import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 1.6rem;
  color: #8f9bb7;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.4rem;

  p {
    color: var(--color-red);
  }
`;

interface StyledInputProps {
  errors?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  font-size: 2rem;

  border: ${({ errors }) =>
    errors ? "1px solid var(--color-red)" : "1px solid #cccccc"};
  color: var(--color-white);
  background-color: transparent;
  border-radius: 0.8rem;
  padding: 10px 16px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: ${({ errors }) =>
      errors ? "1px solid var(--color-red)" : "1px solid #7214ff"};
  }
`;
