import { FirestoreData } from "../../../hooks/useFirestoreData";
import * as S from "./styles";

export const EmptyBoard = ({ data }: FirestoreData) => {
  return (
    <S.Container>
      {data?.board?.length === 0 && <div>This board is empty.</div>}
    </S.Container>
  );
};
