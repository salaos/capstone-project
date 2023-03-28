// global styles for the app

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    --background: #b8e9e8;
    --headline: #2e2e2e;
    --paragraph: #2e2e2e;
    --buttontext: #181818;
    --buttonbackground: #4fc4cf;
    --cardbackground: #fffffe;
    --stroke: #181818;
    --shadow: #2e2e2e;
    --primary: #fbdd74;
    --secondary: #4fc4cf;
    --tertiary: #994ff3;

  }
  body {
    margin: 0;
    font-family: system-ui;
    background: var(--background);
    
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

  h1 { font-size: 2rem; } 
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1rem; }
  h4 { font-size: 0.8rem; }
  h5 { font-size: 0.6rem; }
  h6 { font-size: 0.4rem; }


  p {
    color: var(--paragraph);
  }

  a {
    color: var(--primary);
    text-decoration: none;
  }

  a:hover {
    color: var(--secondary);
  }


`;
