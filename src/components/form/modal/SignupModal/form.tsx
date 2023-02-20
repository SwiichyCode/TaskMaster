import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Button } from "../../../global/Button";
import { useAuth } from "../../../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as S from "../SigninModal/styles";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
type FormData = yup.InferType<typeof schema>;

interface SignupFormProps {
  setOpen: () => void;
}

export const SignupForm = ({ setOpen }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { signUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await signUp(data.email, data.password);

      setSuccessMessage("Votre compte a bien été créé.");

      navigate("/dashboard");

      setOpen();
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).")
        setErrorMessage("L'email est déjà utilisé.");
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
        required
      />

      <Input
        placeholder="********"
        label="Mot de passe"
        name="password"
        type={"password"}
        register={register}
        errors={errors.password?.message}
        required
      />

      <Input
        placeholder="********"
        label="Confirmer le mot de passe"
        name="cpassword"
        type={"password"}
        register={register}
        errors={errors.cpassword?.message}
        required
      />

      {successMessage && <S.SuccessMessage>{successMessage}</S.SuccessMessage>}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

      <Button text="Inscription" type="submit" theme="primary" />
    </form>
  );
};
