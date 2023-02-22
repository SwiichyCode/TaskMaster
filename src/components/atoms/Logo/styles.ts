import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    position: relative;
    color: var(--color-white);
    font-size: 2.4rem;
    font-weight: 700;

    &::after {
      content: "";
      position: absolute;
      bottom: 0.5rem;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #7214ff;
    }
  }
`;

export const Vector = styled.div`
  position: relative;
  width: 34.47px;
  height: 34.38px;
  border-radius: 30%;
  border: 3px solid #fff;

  &::before {
    position: absolute;
    top: -7px;
    right: -7px;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #060b27;
    z-index: 2;
  }

  &::after {
    position: absolute;
    top: -5px;
    right: -5px;
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #7214ff;
    z-index: 3;
  }
`;
