import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  p {
    max-width: 80rem;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #8f9bb7;
  }

  img {
    width: 100%;
    max-width: 80.8rem;
    height: 100%;
    object-fit: contain;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;
