import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
type FormData = yup.InferType<typeof schema>;

interface SigninFormProps {
  setOpen: () => void;
}

export const SigninForm = ({ setOpen }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      await logIn(data.email, data.password);
      navigate("/dashboard");

      setOpen();
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/user-not-found).")
        setErrorMessage("L'utilisateur n'existe pas.");

      if (error.message === "Firebase: Error (auth/wrong-password).")
        setErrorMessage("Le mot de passe est incorrect.");

      if (error.message === "Firebase: Error (auth/too-many-requests).")
        setErrorMessage(
          "Trop de tentatives de connexion. Veuillez réessayer dans quelques minutes."
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="email@gmail.com..."
        label="Email"
        name="email"
        register={register}
        errors={errors.email?.message}
      />

      <Input
        placeholder="********"
        label="Mot de passe"
        type={"password"}
        name="password"
        register={register}
        errors={errors.password?.message}
      />

      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

      <S.Wrapper>
        <p>Mot de passe oublié ?</p>
        <p>
          Première visite ? <span>Inscrivez-vous</span>.
        </p>
      </S.Wrapper>

      <Button text="Se connecter" type="submit" theme="primary" />
    </form>
  );
};
