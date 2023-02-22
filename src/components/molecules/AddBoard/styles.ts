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
