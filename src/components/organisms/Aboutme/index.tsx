import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
}

const StyledAboutme = styled.div`
  text-align: initial;
  width: 60vw;
  margin-top: 205px;
  @media (max-width: 1750px) {
    width: calc(100vw - 500px);
    margin-left: 100px;
    margin-right: 100px;
  }
  @media (max-width: 1150px) {
    width: 70vw;
  }
`;

const StyledAboutmeTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #bdebea;
  @media (max-width: 1150px) {
    text-align: center;
  }
`;

const StyledAboutmeDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAboutmeDescription = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #bdebea;
  @media (max-width: 1150px) {
    text-align: center;
  }
`;

export default function Skill({ title, description }: Props) {
  return (
    <StyledAboutme>
      <StyledAboutmeTitle>{title}</StyledAboutmeTitle>
      <StyledAboutmeDescriptionContainer>
        <StyledAboutmeDescription>{description}</StyledAboutmeDescription>
      </StyledAboutmeDescriptionContainer>
    </StyledAboutme>
  );
}
