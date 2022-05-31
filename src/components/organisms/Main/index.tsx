import React from "react";
import styled from "styled-components";
import programmer from "../../../assets/images/programmer.svg";

const StyledMain = styled.section`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  margin-top: calc((100vh - 504px) / 2);
  display: flex;
  align-items: center;
`;

const StyledMainLeftSide = styled.div`
  width: calc(50vw - 325px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledMainSubtitle = styled.h4`
  font-family: "Tinos";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: blue;
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
  background: black;
  -webkit-background-clip: text;
  margin: 0;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
`;
const StyledMainDescription = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: blue;
  animation-name: fadeIn;
  animation-duration: 4s;
  animation-iteration-count: 1;
}`;
const StyledMainButton = styled.button``;
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
        <StyledMainButton>Contact Me</StyledMainButton>
      </StyledMainLeftSide>
      <StyledMainDiv>
        <StyledMainImage src={programmer} alt="programmer" />
      </StyledMainDiv>
    </StyledMain>
  );
}

/* Button.defaultProps = {
  sizes: "medium"
};
 */
