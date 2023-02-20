import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid #282d45;
  background-color: #0e1330;
  color: var(--color-white);
`;

export const CardHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  margin-bottom: 2.5rem;

  h4 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: var(--color-white);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h4 {
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #8f9bb7;
  }
`;
