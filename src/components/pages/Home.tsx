import { HomeWrapper } from "../templates/HomeWrapper";
import { MainWrapper } from "../templates/MainWrapper";
import { Hero } from "../organims/Hero";
import { Features } from "../organims/Features";
import { Header } from "../organims/Header";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainWrapper>
        <Hero />
        <Features />
      </MainWrapper>
    </HomeWrapper>
  );
};
