import React from "react";

import quotes from "@/assets/icons/quotes.svg";
import * as S from "./styles";

interface FeedbackCardProps {
  src?: string;
  name?: string;
  profession?: string;
  description?: string;
}

export const FeedbackCard = ({
  src = "",
  name,
  profession,
  description,
}: FeedbackCardProps) => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.Wrapper>
          {/* <Image src={src} width={"40"} height={"40"} alt="profil image" /> */}
          <div className="info">
            <h4>{name}</h4>
            <p>{profession}</p>
          </div>
        </S.Wrapper>
        {/* <Image src={quotes} width={"57"} height={"41"} alt="quotes" /> */}
      </S.CardHeader>

      <p>{description}</p>
    </S.Container>
  );
};
