// global styles for the app

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    --background: #b8e9e8;
    --headline: #994ff3;
    --paragraph: #2e2e2e;
    --buttontext: #181818;
    --buttonbackground: #4fc4cf;
    --cardbackground: #fffffe;
    --stroke: #181818;
    --shadow: #2e2e2e;
    --primary: #fbdd74;
    --secondary: #4fc4cf;
    --tertiary: #994ff3;
    --tertiarymid: #B187F2;

  
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: #aff1da;
    background-image: linear-gradient(45deg, #f9ea8f 0%, #aff1da 90%);
    background-size: 300% 300%;
    
  }

  button {
    background: var(--buttonbackground);
    color: var(--buttontext);
    border: 1px solid var(--buttontext);
    border-radius: 5px;

    &:hover {
      background: var(--buttontext);
      color: var(--buttonbackground);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--headline);
    text-align: center;
  }

  h1 { font-size: 1.8rem; } 
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1rem; }
  h4 { font-size: 0.8rem; }
  h5 { font-size: 0.6rem; }
  h6 { font-size: 0.4rem; }


  p {
    color: var(--paragraph);
  }

  a {
    color: var(--tertiary);
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    color: var(--secondary);
  }


`;
