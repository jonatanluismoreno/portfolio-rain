import React from "react";
import styled from "styled-components";
import Skill from "../../molecules/Skill";
import javascript from "../../../assets/images/javascripticon.svg";
import typescript from "../../../assets/images/typescripticon.svg";
import react from "../../../assets/images/reactjsicon.svg";
import git from "../../../assets/images/giticon.svg";
import sass from "../../../assets/images/sass.png";
import graphql from "../../../assets/images/graphqlicon.svg";
import firebase from "../../../assets/images/firebaseicon.svg";
import docker from "../../../assets/images/dockericon.svg";
import styledcomponent from "../../../assets/images/styledcomponents.svg";

interface SkillsTypes {
  image: string;
  title:
    | "JAVASCRIPT"
    | "TYPESCRIPT"
    | "REACT"
    | "GIT"
    | "SASS"
    | "GRAPHQL"
    | "FIREBASE"
    | "DOCKER"
    | "STYLED \n COMPONENTS";
}

const skills: SkillsTypes[] = [
  {
    image: javascript,
    title: "JAVASCRIPT"
  },
  {
    image: typescript,
    title: "TYPESCRIPT"
  },
  {
    image: react,
    title: "REACT"
  },
  {
    image: git,
    title: "GIT"
  },
  {
    image: sass,
    title: "SASS"
  },
  {
    image: graphql,
    title: "GRAPHQL"
  },
  {
    image: firebase,
    title: "FIREBASE"
  },
  {
    image: docker,
    title: "DOCKER"
  },
  {
    image: styledcomponent,
    title: "STYLED \n COMPONENTS"
  }
];

const StyledSkills = styled.section`
  margin-top: 130px;
  margin-bottom: 28px;
  width: 60%;
`;

const StyledSkillsTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  color: #bdebea;
  @media (max-width: 1150px) {
    text-align: center;
  }
`;

const StyledSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 0.6em;
  justify-items: center;
  align-items: center;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  }
`;

export default function Skills() {
  return (
    <StyledSkills>
      <StyledSkillsTitle>Skills</StyledSkillsTitle>
      <StyledSkillsContainer>
        {skills.map(({ image, title }) => (
          <Skill image={image} title={title} description={title} />
        ))}
      </StyledSkillsContainer>
    </StyledSkills>
  );
}
