import React from "react";
import styled from "styled-components";
import Main from "../../components/organisms/Main";
import Header from "../../components/organisms/Header";
import Aboutme from "../../components/organisms/Aboutme";
import Projects from "../../components/organisms/Projects";
import Skills from "../../components/organisms/Skills";
import Footer from "../../components/organisms/Footer";
import arrowscroll from "../../assets/images/arrowscroll.svg";

const StyledHome = styled.section`
  @keyframes fadein {
    from {
      top: 0px;
    }
    to {
      top: 30px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #041f31;
`;

const StyledHomeImage = styled.img`
  position: relative;
  display: inline-block;
  animation-name: fadein;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export default function HomePage() {
  const goToAboutMe = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    });
  };
  return (
    <StyledHome>
      <Header />
      <Main />
      <StyledHomeImage
        src={arrowscroll}
        alt="scroll down"
        onClick={goToAboutMe}
      />
      <Aboutme
        title="About me"
        description="
          I'm a Student of the University of Buenos Aires, Argentina. With a
          strong background in programming, I have a strong desire to learn and
          improve my skills. I'm a self-motivated person who is always looking
          for new challenges and opportunities."
      />
      <Projects />
      <Skills />
      <Footer />
    </StyledHome>
  );
}

/* Button.defaultProps = {
  sizes: "medium"
};
 */
