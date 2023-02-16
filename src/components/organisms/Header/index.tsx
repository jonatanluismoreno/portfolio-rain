import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button";

const StyledHeader = styled.header`
  background-color: #041f31;
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

const StyledHeaderRightSide = styled.div`
  margin-right: 215px;
  display: flex;
  @media (max-width: 1000px) {
    margin-right: 10vw;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderLeftSide>
        <Link to="/">
          <Button text="Home" />
        </Link>
      </StyledHeaderLeftSide>
      <StyledHeaderRightSide>
        <Link to="/projects">
          <Button text="Projects" />
        </Link>
        <Link to="/about">
          <Button text="About" colored />
        </Link>
      </StyledHeaderRightSide>
    </StyledHeader>
  );
}
