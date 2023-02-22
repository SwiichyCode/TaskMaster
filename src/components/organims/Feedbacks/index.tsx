import { useState, useEffect, useCallback } from "react";
import { SectionWrapper } from "../../wrappers/SectionWrapper";
import { TitleGradient } from "../../atoms/TitleGradient";
import { FeedbackCard } from "./FeedbackCard";
import { items } from "./data";
import * as S from "./styles";

export const Feedbacks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideToRight = useCallback(() => {
    currentSlide === items.length - 3
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);

  const slideToLeft = () => {
    currentSlide === 0
      ? setCurrentSlide(items.length - 3)
      : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideToRight();
    }, 9000);
    return () => clearInterval(interval);
  }, [currentSlide, slideToRight]);

  return (
    <SectionWrapper>
      <S.Container>
        <S.Wrapper>
          <TitleGradient as="h2" text="What our client say" fontSize="4.8rem" />
          <p>
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </p>
        </S.Wrapper>
        <S.CardsWrapper>
          {items.slice(currentSlide, currentSlide + 3).map((item, index) => (
            <FeedbackCard
              key={index}
              src={item.src}
              name={item.name}
              profession={item.profession}
              description={item.description}
            />
          ))}
        </S.CardsWrapper>
        <div className="carousel-button">
          <button onClick={() => slideToLeft()}>prev</button>
          <button onClick={() => slideToRight()}>next</button>
        </div>
      </S.Container>
    </SectionWrapper>
  );
};
