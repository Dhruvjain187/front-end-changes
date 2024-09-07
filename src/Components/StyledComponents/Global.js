import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
  }

  

  html{
    width: 100%;
    animation: animate 1s ease-in;
  }

  @keyframes animate{
    from{
      opacity:0;
      transform: translateY(50px);
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }

  body {
    font-family: "Mukta",sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    width: 100%;
}
`;