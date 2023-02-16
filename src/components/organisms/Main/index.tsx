import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../atoms/Button";
import programmer from "../../../assets/images/programmer.svg";

const fadein = keyframes`from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }`;

const StyledMain = styled.section`
  margin-top: calc((100vh - 504px) / 2);
  display: flex;
  align-items: center;

  @media (max-width: 1150px) {
    margin-top: calc(18vh);
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 1750px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

const StyledMainLeftSide = styled.div`
  width: calc(50vw - 325px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1750px) {
    margin-top: 70px;
    width: calc(50vw - 150px);
  }
  @media (max-width: 1350px) {
    width: calc(50vw);
  }

  @media (max-width: 1150px) {
    width: calc(85vw);
    align-items: center;
  }
`;
const StyledMainSubtitle = styled.h4`
  font-family: "Tinos";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #d7e5ec;
  margin: 0;
  animation-name: fadeIn;
  animation-duration: 3s;
  animation-iteration-count: 1;
`;
const StyledMainTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 65px;
  line-height: 88px;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  margin: 0;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @media (max-width: 1150px) {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 55px;
  }
  @media (max-width: 1350px) {
    font-size: 60px;
    line-height: 60px;
  }
  @media (max-width: 1750px) {
    font-size: 62px;
    line-height: 65px;
  }
`;
const StyledMainDescription = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #bdebea;
  animation-name: ${fadein};
  animation-duration: 4s;
  animation-iteration-count: 1;
  @media (max-width: 1150px) {
    text-align: center;
    margin-bottom: 25px;
  }
}`;

const StyledMainDiv = styled.div``;
const StyledMainImage = styled.img``;

export default function Main() {
  return (
    <StyledMain>
      <StyledMainLeftSide>
        <StyledMainSubtitle>FRONTEND DEVELOPER</StyledMainSubtitle>
        <StyledMainTitle>Jonatan Moreno</StyledMainTitle>
        <StyledMainDescription>
          I&apos;m a Frontend Developer with a passion for creating beautiful
          and usable user interfaces.
        </StyledMainDescription>
        <Button text="Contact Me" colored />
      </StyledMainLeftSide>
      <StyledMainDiv>
        <StyledMainImage src={programmer} alt="programmer" />
      </StyledMainDiv>
    </StyledMain>
  );
}
