import * as S from "./styles";
import { items } from "./data";

export const Navbar = () => {
  return (
    <S.Container role={"navigation"}>
      <ul>
        {items.map(({ url, text }, index) => (
          <li key={index}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};
