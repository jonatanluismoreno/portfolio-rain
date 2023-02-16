import React from "react";
import { v1 } from "uuid";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Project from "../../molecules/Project";
import strawberry1 from "../../../assets/proyimages/1cmyk-strawberry.web.app.jpeg";
import strawberry4 from "../../../assets/proyimages/4cmyk-strawberry.web.app.jpeg";
import strawberry5 from "../../../assets/proyimages/5cmyk-strawberry.web.app.jpeg";
import strawberry6 from "../../../assets/proyimages/6cmyk-strawberry.web.app.jpeg";
import strawberry7 from "../../../assets/proyimages/7cmyk-strawberry.web.app.jpeg";
import strawberry8 from "../../../assets/proyimages/8cmyk-strawberry.web.app.jpeg";
import figmacommunity1 from "../../../assets/proyimages/1figma-community-clone-8z1tdekl6-jseven5.vercel.app.jpeg";
import figmacommunity2 from "../../../assets/proyimages/2figma-community-clone-8z1tdekl6-jseven5.vercel.app.jpeg";
import figmacommunity3 from "../../../assets/proyimages/3figma-community-clone-8z1tdekl6-jseven5.vercel.app.jpeg";
import figmacommunity4 from "../../../assets/proyimages/4figma-community-clone-8z1tdekl6-jseven5.vercel.app.jpeg";
import figmacommunity5 from "../../../assets/proyimages/5figma-community-clone-8z1tdekl6-jseven5.vercel.app.jpeg";
import figmacommunity6 from "../../../assets/proyimages/6figma-community-clone-8z1tdekl6-jseven5.vercel.app.jpeg";
import pricing1 from "../../../assets/proyimages/1jonatanluismoreno.github.io.jpeg";
import pricing2 from "../../../assets/proyimages/2jonatanluismoreno.github.io.jpeg";
import pricing3 from "../../../assets/proyimages/3jonatanluismoreno.github.io.jpeg";
import kimche1 from "../../../assets/proyimages/1kimchechallenge-sigma.vercel.app.jpeg";
import kimche2 from "../../../assets/proyimages/2kimchechallenge-sigma.vercel.app.jpeg";
import kimche3 from "../../../assets/proyimages/3kimchechallenge-sigma.vercel.app.jpeg";
import kimche4 from "../../../assets/proyimages/4kimchechallenge-sigma.vercel.app.jpeg";
import kimche5 from "../../../assets/proyimages/5kimchechallenge-sigma.vercel.app.jpeg";

// const strawberryItems = [strawberry1, strawberry2, strawberry3, strawberry4];
const strawberryList = [
  {
    source: strawberry1,
    id: v1()
  },
  {
    source: strawberry4,
    id: v1()
  },
  {
    source: strawberry5,
    id: v1()
  },
  {
    source: strawberry6,
    id: v1()
  },
  {
    source: strawberry7,
    id: v1()
  },
  {
    source: strawberry8,
    id: v1()
  }
];

const figmacommunityList = [
  {
    source: figmacommunity1,
    id: v1()
  },
  {
    source: figmacommunity2,
    id: v1()
  },
  {
    source: figmacommunity3,
    id: v1()
  },
  {
    source: figmacommunity4,
    id: v1()
  },
  {
    source: figmacommunity5,
    id: v1()
  },
  {
    source: figmacommunity6,
    id: v1()
  }
];

const pricingList = [
  {
    source: pricing1,
    id: v1()
  },
  {
    source: pricing2,
    id: v1()
  },
  {
    source: pricing3,
    id: v1()
  }
];

const kimcheList = [
  {
    source: kimche1,
    id: v1()
  },
  {
    source: kimche2,
    id: v1()
  },
  {
    source: kimche3,
    id: v1()
  },
  {
    source: kimche4,
    id: v1()
  },
  {
    source: kimche5,
    id: v1()
  }
];

const strawberryTecnologies = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "SASS",
  "FIREBASE"
];
const figmaTecnologies = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "SASS",
  "FIREBASE"
];
const kimcheecnologies = [
  "JAVASCRIPT",
  "REACT",
  "STYLED COMPONENTS",
  "GRAPHQL"
];
const pricingtecnologies = ["JAVASCRIPT", "CSS"];

const StyledProjects = styled.div`
  margin-top: 200px;
  width: 85vw;
  /* width: 60% */
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledProjectsTitle = styled.div`
  margin-left: 150px;
  margin-bottom: 50px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #bdebea;
`;
const StyledProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38em, 1fr));
  justify-items: center;
  /* display: flex;
  justify-content: space-around; */
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const StyledButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Main() {
  return (
    <StyledProjects>
      <StyledProjectsTitle>Projects</StyledProjectsTitle>
      <StyledProjectsContainer>
        <Project
          listImages={strawberryList}
          seconds={3500}
          tecnologies={strawberryTecnologies}
          name="FRUTTI STOP"
          description="A tipical game where you have to complete a list of topics with
          randoms letters. Its multiplayer and you can play with your friends."
        />
        <Project
          listImages={figmacommunityList}
          seconds={2700}
          tecnologies={figmaTecnologies}
          name="FIGMA COMMUNITY CLONE"
          description="A clone of one of the most useful web pages for frontends  and web designers. "
        />
        <Project
          listImages={kimcheList}
          seconds={1800}
          tecnologies={kimcheecnologies}
          name="COUNTRY FINDER"
          description="An interactive page where you can search and filter countries by their capital and their languages."
        />
        <Project
          listImages={pricingList}
          seconds={4500}
          tecnologies={pricingtecnologies}
          name="PRICING ELEMENT"
          description="A visual element that adapts value as query traffic increases."
        />
      </StyledProjectsContainer>
      <StyledButtonContainer>
        <Button text="SEE ALL PROJECTS" colored />
      </StyledButtonContainer>
    </StyledProjects>
  );
}
