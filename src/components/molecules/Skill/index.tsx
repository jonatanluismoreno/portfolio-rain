import React from "react";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  description: string;
}

const StyledSkill = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledSkillImage = styled.img`
  display: inline-flex;
  width: 120px;
  height: 120px;
`;

const StyledSkillTitleContainer = styled.div`
  display: inline-block;
  width: 150px;
`;

const StyledSkillTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: blue;
`;

export default function Skill({ image, title, description }: Props) {
  return (
    <StyledSkill>
      <StyledSkillImage src={image} alt={description} />
      <StyledSkillTitleContainer>
        <StyledSkillTitle>{title}</StyledSkillTitle>
      </StyledSkillTitleContainer>
    </StyledSkill>
  );
}
