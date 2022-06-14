import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  carouselItems: any[];
  seconds: number;
}

interface CarouselProps {
  readonly visible?: boolean;
}

const StyledCarousel = styled.div`
  display: inline-block;
`;

const StyledCarouselItem = styled.img<CarouselProps>`
  display: ${(props) => (props.visible ? "block-inline" : "none")};
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

export default function Carousel(props: Props) {
  const [active, setActive] = useState(0);
  const { seconds, carouselItems } = props;
  useEffect(() => {
    setTimeout(() => {
      setActive((active + 1) % carouselItems.length);
    }, seconds);
  });
  return (
    <StyledCarousel>
      {carouselItems.map(({ source, id }, index) => {
        return index === active ? (
          <StyledCarouselItem key={id} src={source} visible />
        ) : (
          <StyledCarouselItem key={id} src={source} />
        );
      })}
    </StyledCarousel>
  );
}
