import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Abel', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
  
  * {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Abel'
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
  
`;
