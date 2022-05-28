import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  // sizes?: "small" | "medium" | "large";
}

const StyledButton = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: c.$black40;
  padding: 12px 20px 13px;
  background: c.$linear10;
  border-radius: 6px;
`;

export default function Button({ text }: Props) {
  return <StyledButton type="button">{text}</StyledButton>;
}

/* Button.defaultProps = {
  sizes: "medium"
};
 */
