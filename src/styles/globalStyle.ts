import { createGlobalStyle } from "styled-components";
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
    background: #090d2e;
    color: white;
    font-family: 'Montserrat';
  }


`