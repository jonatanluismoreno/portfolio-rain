import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  text: string;
  colored?: boolean;
}

interface ButtonProps {
  bordered?: boolean;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 25px #5ddcff;
                0 0 50px #4e00c2;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.bordered ? "#252728" : "#bdebea")};
  cursor: pointer;
  padding: ${(props) => (props.bordered ? "12px 20px 13px" : "16px")};
  background: ${(props) =>
    props.bordered
      ? "linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)"
      : "none"};
  border-radius: 6px;
  :hover {
    animation: ${pulse} 1.7s ease-in-out;
  }
  margin-right: ${(props) => (props.bordered ? "none" : "86px")};
`;

export default function Button({ text, colored }: Props) {
  return (
    <StyledButton type="button" bordered={colored}>
      {text}
    </StyledButton>
  );
}

Button.defaultProps = {
  colored: false
};
