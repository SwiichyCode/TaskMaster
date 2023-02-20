import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 3rem;
  background-color: #0e1330;
  border-radius: 0.4rem;
  border: 1px solid #282d45;
  padding: 3rem 4rem;

  img {
    width: fit-content;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 1.2rem;

  h3 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: var(--color-white);
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #8f9bb7;
  }
`;
