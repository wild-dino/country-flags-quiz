import styled, { createGlobalStyle } from "styled-components";
import { MontserratBold, MontserratRegular } from "./fonts";

export default createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${MontserratRegular}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${MontserratBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html, body {
    font-size: 100%;
    margin: 0;
    color: white;
    font-family: 'Montserrat';
  }
`;

export const WrapperContainer = styled.div`
    overflow: hidden;
    width: 70%;
    padding-bottom: 60%;
    height: 0;
    position: relative;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
`;
