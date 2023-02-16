import React from "react";
import styled from "styled-components";
import Carousel from "../../atoms/Carousel";

interface Props {
  listImages: any;
  seconds: number;
  tecnologies: string[];
  name: string;
  description: string;
}

const StyledProject = styled.div`
  background: #222525;
  border-radius: 6px;
  width: 27vw;
  margin: 0;
  @media (max-width: 1300px) {
    width: 50vw;
  }
  @media (max-width: 1150px) {
    margin-bottom: 40px;
  }
`;

const StyledProjectBotton = styled.div`
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledProjectTitle = styled.div`
  margin-left: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #d9f2f2;
`;
const StyledProjectTechnologies = styled.div`
  margin-left: 25px;
  display: flex;
  gap: 10px;
  @media (max-width: 1150px) {
    margin-left: 0;
  }
`;
const StyledProjectTechnology = styled.span`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 4px;
  padding: 8px 16px;
  font-family: "Montserrat";
  font-style: normal;
  letter-spacing: 0.12em;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  }
`;
const StyledProjectDescription = styled.p`
  margin-left: 25px;
  margin-top: 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #bdebea;
  @media (max-width: 1150px) {
    text-align: center;
  }
`;
export default function Project({
  listImages,
  seconds,
  tecnologies,
  name,
  description
}: Props) {
  return (
    <StyledProject>
      <Carousel carouselItems={listImages} seconds={seconds} />
      <StyledProjectBotton>
        <StyledProjectTitle>{name}</StyledProjectTitle>
        <StyledProjectTechnologies>
          {tecnologies.map((technology: string) => (
            <StyledProjectTechnology>{technology}</StyledProjectTechnology>
          ))}
        </StyledProjectTechnologies>
        <StyledProjectDescription>{description}</StyledProjectDescription>
      </StyledProjectBotton>
    </StyledProject>
  );
}
