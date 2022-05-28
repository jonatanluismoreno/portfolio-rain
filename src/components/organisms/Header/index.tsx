import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";

const StyledHeader = styled.header`
  background-color: c.$black50;
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

const StyledHeaderLeftSide = styled.div`
  margin-left: 215px;
  @media (max-width: 1000px) {
    margin-left: 10vw;
  }
`;

const StyledHeaderButton = styled.button`
  margin-right: 86px;
  background: none;
  border: none;
  padding: 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #bdebea;
`;

const StyledHeaderRightSide = styled.div`
  margin-right: 215px;
  display: flex;
  @media (max-width: 1000px) {
    margin-right: 10vw;
  }
`;

export default function Skill() {
  return (
    <StyledHeader>
      <StyledHeaderLeftSide>
        <StyledHeaderButton />
      </StyledHeaderLeftSide>
      <StyledHeaderRightSide>
        <StyledHeaderButton />
        <Button text="About" />
      </StyledHeaderRightSide>
    </StyledHeader>
  );
}