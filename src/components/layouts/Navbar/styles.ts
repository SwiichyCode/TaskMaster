import styled from "styled-components";

export const Container = styled.nav`
  padding-top: 0.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    a {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: #8f9bb7;
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      padding: 1rem;

      &:hover {
        color: #fff;
      }
    }
  }
`;
