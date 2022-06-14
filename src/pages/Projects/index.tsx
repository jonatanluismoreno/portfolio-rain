import React from "react";
import styled from "styled-components";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import Projects from "../../components/organisms/Projects";

const StyledProjects = styled.div`
  background-color: #041f31;
`;
const StyledProjectsContainer = styled.div``;

export default function ProjectsPage() {
  return (
    <StyledProjects>
      <Header />
      <StyledProjectsContainer>
        <Projects />
      </StyledProjectsContainer>
      <Footer />
    </StyledProjects>
  );
}
