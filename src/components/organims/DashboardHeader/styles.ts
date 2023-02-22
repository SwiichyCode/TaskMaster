import styled from "styled-components";

interface ContainerProps {
  user: any;
}

export const Container = styled.header`
  ${({ theme }) => theme.mixins.flexBetween}
  height: 9.6rem;
  border-bottom: 1px solid #151934;
  padding: 0 2.4rem;
  color: var(--color-white);
`;

export const Wrapper = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .left-side {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: var();
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
`;
