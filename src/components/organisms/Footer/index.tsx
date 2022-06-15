import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gmail from "../../../assets/images/gmailicon.svg";
import github from "../../../assets/images/githubicon.svg";
import linkedin from "../../../assets/images/linkedinicon.svg";

const StyledFooter = styled.footer`
  margin-top: 280px;
  @media (max-width: 1150px) {
    margin-top: 150px;
  }
`;

const StyledFooterSocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 73px;
`;

const StyledFooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

const StyledFooterSocialMediaImage = styled.img`
  display: block;
`;

const StyledFooterSocialMediaTitle = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #bdebea;
`;

const StyledFooterLinks = styled.div`
  text-align: center;
  margin-bottom: 49px;
`;

const StyledFooterLink = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #bdebea;
  margin: 0 48px;
`;

const StyledFooterTitle = styled.h4`
  margin: 0;
  padding-bottom: 70px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #bdebea;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterSocialMediaContainer>
        <StyledFooterSocialMedia>
          <StyledFooterSocialMediaImage src={gmail} alt="gmail" />
          <StyledFooterSocialMediaTitle>GMAIL</StyledFooterSocialMediaTitle>
        </StyledFooterSocialMedia>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/jonatan-moreno-39651b215/"
          }}
          target="_blank"
        >
          <StyledFooterSocialMedia>
            <StyledFooterSocialMediaImage src={linkedin} alt="linkedin" />
            <StyledFooterSocialMediaTitle>
              LINKEDIN
            </StyledFooterSocialMediaTitle>
          </StyledFooterSocialMedia>
        </Link>
        <Link to="/linkedin" target="_blank">
          <StyledFooterSocialMedia>
            <StyledFooterSocialMediaImage src={github} alt="github" />
            <StyledFooterSocialMediaTitle>GITHUB</StyledFooterSocialMediaTitle>
          </StyledFooterSocialMedia>
        </Link>
      </StyledFooterSocialMediaContainer>
      <StyledFooterLinks>
        <StyledFooterLink>Projects</StyledFooterLink>
        <StyledFooterLink>Contact</StyledFooterLink>
      </StyledFooterLinks>
      <StyledFooterTitle>Frontend Developer</StyledFooterTitle>
    </StyledFooter>
  );
}
