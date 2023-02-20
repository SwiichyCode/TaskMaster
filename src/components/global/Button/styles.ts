import styled from "styled-components";

interface StyledButtonProps {
  $color?: string;
  bgColor?: string;
  theme?: "primary" | "secondary";
}

const handleColorType = (theme: string) => {
  switch (theme) {
    case "primary":
      return "color: var(--color-white); background-color: #7214ff;";
    case "secondary":
      return "color: var(--color-white); border: 1px solid #282D45; background-color: rgba(14, 19, 46, 0.8);";
    default:
      return "var(--color-white)";
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3.6rem;
  border: 1px solid transparent;
  cursor: pointer;
  ${({ theme }) => handleColorType(theme)}
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #fff;
  }

  &:focus {
    outline: 1px solid #fff;
  }
`;
