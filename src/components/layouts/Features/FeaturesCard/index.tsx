import * as S from "./styles";

interface FeaturesCardProps {
  src?: string;
  title?: string | any;
  description?: string | any;
}

export const FeaturesCard = ({
  src = "",
  title,
  description,
}: FeaturesCardProps) => {
  return (
    <S.Container>
      <img src={src} alt="" />
      <S.Wrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.Wrapper>
    </S.Container>
  );
};
