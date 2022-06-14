import React from "react";
import styled from "styled-components";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const StyledAbout = styled.div`
  background-color: #041f31;
  padding-top: 170px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledAboutForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAboutFormField = styled.div``;
const StyledAboutFormSubtitle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #bdebea;
`;
const StyledAboutFormInput = styled.input`
  display: inline-block;
  height: 48px;
  width: 500px;
  border: 1px solid #bdebea;
  border-radius: 6px;
  background-color: transparent;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-indent: 10px;
  color: #bdebea;
  :placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #bdebea;
  }
`;
const StyledAboutFormInputBig = styled.input`
  display: inline-block;
  height: 165px;
  width: 500px;
  border: 1px solid #bdebea;
  border-radius: 6px;
  background-color: transparent;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-indent: 10px;
  line-height: 20px;
  color: #bdebea;
  :placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #bdebea;
  }
`;
const StyledAboutFormButton = styled.button`
  display: inline-block;
  height: 48px;
  margin-top: 20px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 6px;
  padding: 12px 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #252728;
`;

export default function AboutPage() {
  return (
    <StyledAbout>
      <Header />
      <StyledAboutForm>
        <StyledAboutFormField>
          <StyledAboutFormSubtitle>Name</StyledAboutFormSubtitle>
          <StyledAboutFormInput type="text" placeholder="Name" />
        </StyledAboutFormField>
        <StyledAboutFormField>
          <StyledAboutFormSubtitle>Email</StyledAboutFormSubtitle>
          <StyledAboutFormInput type="text" placeholder="@yourcompany.com" />
        </StyledAboutFormField>
        <StyledAboutFormField>
          <StyledAboutFormSubtitle>Message</StyledAboutFormSubtitle>
          <StyledAboutFormInputBig
            type="text"
            placeholder="Write something..."
          />
        </StyledAboutFormField>
        <StyledAboutFormButton>Submit</StyledAboutFormButton>
      </StyledAboutForm>
      <Footer />
    </StyledAbout>
  );
}
