import React from "react";
import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
  bgColor?: string;
  theme?: "primary" | "secondary";
}

export const Button = ({
  text,
  color,
  bgColor,
  theme,
  ...props
}: ButtonProps) => {
  return (
    <S.StyledButton color={color} bgColor={bgColor} theme={theme} {...props}>
      {text}
    </S.StyledButton>
  );
};
