import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 6rem;
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  flex-wrap: wrap;
  gap: 1.6rem;

  h2 {
    max-width: 61.2rem;
    text-align: left;
    font-size: 3.4rem;
    line-height: 4.4rem;
    background: var(--color-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: 2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    max-width: 39.2rem;
    color: #8f9bb7;
  }
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 2.4rem;
`;
