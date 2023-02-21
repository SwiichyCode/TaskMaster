import { useNavigate } from "react-router-dom";
import { Logo } from "../../global/Logo";
import { Button } from "../../global/Button";
// import { useTranslation } from "next-i18next";
import { useToggle } from "../../../hooks/useToggle";
import { SigninModal } from "../../form/modal/SigninModal";
import { SignupModal } from "../../form/modal/SignupModal";
import { useAuth } from "../../../context/AuthContext";
import * as S from "./styles";
import { UserLayout } from "../../../layouts/UserLayout";

export const Header = () => {
  // const { t } = useTranslation("common");
  const { state: openIn, toggle: setOpenIn } = useToggle();
  const { state: openUp, toggle: setOpenUp } = useToggle();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <S.Container id="header">
      <S.Wrapper user={user}>
        <div className="left-side">
          <Logo />
          {/* {user.email} */}
        </div>

        <S.BtnWrapper>
          <Button
            // text={t("app_login_button")}
            text="Connexion"
            theme="primary"
            onClick={(e) => {
              e.currentTarget.blur();
              setOpenIn();
            }}
          />
          <Button
            // text={t("app_signup_button")}
            text="S'inscrire"
            theme="primary"
            onClick={(e) => {
              e.currentTarget.blur();
              setOpenUp();
            }}
          />

          <SigninModal open={openIn} setOpen={setOpenIn} />
          <SignupModal open={openUp} setOpen={setOpenUp} />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
