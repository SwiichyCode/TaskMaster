import { ModalWrapper } from "../../../wrappers/ModalWrapper";
import { TitleGradient } from "../../../global/TitleGradient";
import { SigninForm } from "./form";
import * as S from "./styles";

interface LoginModalProps {
  open: any;
  setOpen: () => void;
}

export const SigninModal = ({ open = false, setOpen }: LoginModalProps) => {
  return (
    <ModalWrapper isOpen={open} onClose={setOpen}>
      <S.FormWrapper>
        <TitleGradient text={"Connexion"} fontSize="3.6rem" />

        <SigninForm setOpen={setOpen} />
      </S.FormWrapper>
    </ModalWrapper>
  );
};
