// import { useTranslation } from "next-i18next";
import { SectionWrapper } from "../../wrappers/SectionWrapper";
import { Button } from "../../global/Button";
import { TitleGradient } from "../../global/TitleGradient";
import { useToggle } from "../../../hooks/useToggle";
import { SignupModal } from "../../form/modal/SignupModal";
import imgHero from "../../../assets/hero.svg";
import * as S from "./styles";

export const Hero = () => {
  // const { t } = useTranslation("common");
  const { state: openUp, toggle: setOpenUp } = useToggle();

  return (
    <SectionWrapper>
      <S.Container>
        <S.Wrapper>
          <TitleGradient
            as="h1"
            // text={t("app_title")}
            text="Simplifiez votre flux de travail avec Task Master"
          />
          <p>
            Optimisez votre gestion de projet avec Task Master. Invitez des
            collaborateurs, centralisez vos idées et améliorez votre efficacité
            de travail.
            {/* {t("app_subtitle")} */}
          </p>
          <S.ButtonWrapper>
            <Button
              // text={t("app_start_button")}
              text="Commencer Maintenant"
              theme="primary"
              onClick={(e) => {
                e.currentTarget.blur();
                setOpenUp();
              }}
            />
          </S.ButtonWrapper>

          <SignupModal open={openUp} setOpen={setOpenUp} />
        </S.Wrapper>
        <img src={imgHero} width={808} height={513} alt="hero" />
      </S.Container>
    </SectionWrapper>
  );
};
