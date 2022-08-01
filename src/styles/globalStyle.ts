import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
@font-face {
    font-family: 'Menlo';
    src: local('Menlo'), local('Menlo'),
    url(${MenloRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`