import { ModalWrapper } from "../../templates/ModalWrapper";
import { TitleGradient } from "../../atoms/TitleGradient";
import { SignupForm } from "./form";
import * as S from "../SigninModal/styles";

interface LoginModalProps {
  open: any;
  setOpen: () => void;
}

export const SignupModal = ({ open = false, setOpen }: LoginModalProps) => {
  return (
    <ModalWrapper isOpen={open} onClose={setOpen}>
      <S.FormWrapper>
        <TitleGradient text={"S'inscrire"} fontSize="3.6rem" />

        <SignupForm setOpen={setOpen} />
      </S.FormWrapper>
    </ModalWrapper>
  );
};
