import { useNavigate } from "react-router-dom";
import { Logo } from "../../global/Logo";
import { Button } from "../../global/Button";
import { useAuth } from "../../../context/AuthContext";
import * as S from "./styles";

export const Header = () => {
  // const { t } = useTranslation("common");
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
        </div>

        <S.BtnWrapper>
          <Button
            // text={t("app_logout_button")}
            text="Déconnexion"
            theme="primary"
            onClick={(e) => {
              e.currentTarget.blur();
              logOutHandler();
            }}
          />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
