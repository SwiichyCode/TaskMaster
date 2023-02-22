import React from "react";
import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: any;
  errors?: any;
  required?: boolean;
  name?: string;
}

export const Input = ({
  label,
  name,
  register = () => {},
  errors,
  required,
  ...props
}: InputProps) => (
  <S.Container>
    <S.StyledLabel htmlFor={props.id}>
      {label} {errors && <p>{errors}</p>}
    </S.StyledLabel>
    <S.StyledInput
      {...props}
      {...register(name, { required })}
      errors={errors}
    />
  </S.Container>
);
