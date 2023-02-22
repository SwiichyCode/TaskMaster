import { SectionWrapper } from "../../templates/SectionWrapper";
import { TitleGradient } from "../../atoms/TitleGradient";
import { FeaturesCard } from "../Features/FeaturesCard";
// import { useTranslation } from "next-i18next";
import { items } from "./data";
import * as S from "./styles";

export const Features = () => {
  // const { t } = useTranslation("common");

  return (
    <SectionWrapper>
      <S.Container>
        <S.HeaderWrapper>
          <TitleGradient
            as="h2"
            // text={t("app_features_title")}
            text={
              "Des fonctionnalités simples et efficaces pour une gestion optimale de tous vos projets."
            }
          />
          <p>
            Transformez votre gestion de projet avec les fonctionnalités
            puissantes de [Nom de l'application]. Obtenez un contrôle total sur
            vos tâches, vos idées et votre collaboration avec des outils simples
            et efficaces.
            {/* {t("app_features_subtitle")} */}
          </p>
        </S.HeaderWrapper>
        <S.FeaturesWrapper>
          {items.map(({ src, title, description }, index) => (
            <FeaturesCard
              key={index}
              src={src}
              title={title}
              description={description}
            />
          ))}
        </S.FeaturesWrapper>
      </S.Container>
    </SectionWrapper>
  );
};
