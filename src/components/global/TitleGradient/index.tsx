import React from "react";
import styled from "styled-components";

interface TitleGradientProps {
  text?: string | any;
  as?: keyof JSX.IntrinsicElements;
  fontSize?: string;
}

export const TitleGradient = ({
  text,
  fontSize,
  as = "h1",
}: TitleGradientProps) => {
  return (
    <StyledTitleGradient as={as} fontSize={fontSize}>
      {text}
    </StyledTitleGradient>
  );
};

const StyledTitleGradient = styled.h1<TitleGradientProps>`
  font-size: ${({ fontSize }) => fontSize};
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
