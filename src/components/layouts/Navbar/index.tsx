import * as S from "./styles";
import { items } from "./data";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <S.Container role={"navigation"}>
      <ul>
        {items.map(({ url, text }, index) => (
          <li key={index}>
            <Link to={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};
