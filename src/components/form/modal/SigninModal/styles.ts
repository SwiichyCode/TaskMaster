import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #8f9bb7;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding-left: 0.4rem;
    margin: 2.4rem 0 0 0;
  }

  span {
    color: var(--color-white);
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  p {
    width: fit-content;
  }

  & p:first-child {
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--color-white);
      cursor: pointer;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--color-red);
`;

export const SuccessMessage = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--color-green);
`;
