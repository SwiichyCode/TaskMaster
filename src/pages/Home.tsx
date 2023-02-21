import { HomeWrapper } from "../components/wrappers/HomeWrapper";
import { MainWrapper } from "../components/wrappers/MainWrapper";
import { Hero } from "../components/layouts/Hero";
import { Features } from "../components/layouts/Features";
import { Header } from "../components/layouts/Header";
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
