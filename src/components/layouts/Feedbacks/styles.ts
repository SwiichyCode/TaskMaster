import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 6rem;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: center;
  text-align: center;
  color: #8f9bb7;
  gap: 2.4rem;

  p {
    max-width: 60rem;
    color: #8f9bb7;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7.3rem;
`;
