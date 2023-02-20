import { HomeWrapper } from "../components/wrappers/HomeWrapper";
import { Header } from "../components/layouts/Header";
import { MainWrapper } from "../components/wrappers/MainWrapper";
import { Hero } from "../components/layouts/Hero";
import { Features } from "../components/layouts/Features";

export const Home = () => {
  return (
    <HomeWrapper>
      {/* <Header /> */}
      <MainWrapper>
        <Hero />
        <Features />
        {/* <Feedbacks /> */}
      </MainWrapper>
    </HomeWrapper>
  );
};
