import { TitleGradient } from "../../atoms/TitleGradient";
import { ModalWrapper } from "../../templates/ModalWrapper";
import { Form } from "./form";
import * as S from "./styles";

interface AddBoardModalProps {
  open: boolean;
  setOpen: () => void;
}

export const AddBoardModal = ({ open, setOpen }: AddBoardModalProps) => {
  return (
    <ModalWrapper isOpen={open} onClose={setOpen}>
      <S.FormWrapper>
        <TitleGradient text={"Add board"} fontSize="3.6rem" />

        <Form setOpen={setOpen} />
      </S.FormWrapper>
    </ModalWrapper>
  );
};
