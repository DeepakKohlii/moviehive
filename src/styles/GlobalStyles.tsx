import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #EAECF1;
    background-image: url('https://res.cloudinary.com/dqpjkmzn7/image/upload/v1733258910/gu9y2rueismsypykbppo.jpg');
    background-size: cover;  /* Ensures the background image covers the entire page */
    background-position: center;  /* Centers the image */
    background-attachment: fixed;  /* Keeps the background fixed during scrolling */
  }


`;

export default GlobalStyles;
