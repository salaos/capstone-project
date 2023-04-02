// global styles for the app

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    --background: #b8e9e8;
    --headline: #181818;
    --paragraph: #2e2e2e;
    --buttontext: #181818;
    --buttonbackground: #4fc4cf;
    --cardbackground: #fffffe;
    --stroke: #181818;
    --shadow: #2e2e2e;
    --primary: #fbdd74;
    --secondary: #4fc4cf;
    --secondarymid: #7ED6E0;
    --tertiary: #994ff3;
    --tertiarymid: #B187F2;

  
  }

header {
  margin: 0;
  font-family: system-ui;
  display: flex;
  justify-content: center;
  align-items: center;
}


  body {
    margin: 0;
    font-family: system-ui;
    background-color: #aff1da;
    background: linear-gradient(45deg, #f9ea8f 0%, #aff1da 100%);
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

  h1 { font-size: 1.6rem;  
    @media (min-width: 768px) {
    font-size: 1.8rem;
  } @media (min-width: 1024px) {
    font-size: 2rem;
  }} 

  h2 { font-size: 1.4rem;
    @media (min-width: 768px) {
    font-size: 1.6rem;
  } @media (min-width: 1024px) {
      font-size: 1.8rem;
  }}

  h3 { font-size: 1.2rem;
    @media (min-width: 768px) {
    font-size: 1.4rem;
  } @media (min-width: 1024px) {
      font-size: 1.6rem;
  }}

  h4 { font-size: 1rem;
    @media (min-width: 768px) {
    font-size: 1.1rem;
  } @media (min-width: 1024px) {
      font-size: 1.2rem;
  }}

  h5 { font-size: 0.9rem;
    @media (min-width: 768px) {
    font-size: 1rem;
  } @media (min-width: 1024px) {
      font-size: 1.1rem;
  }}

  h6 { font-size: 0.8rem;
    @media (min-width: 768px) {
    font-size: 0.9rem;
  } @media (min-width: 1024px) {
      font-size: 1rem;
  }}}


  p {
    color: var(--paragraph);
    font-size: 0.8rem;

      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
  
      @media (min-width: 1024px) {
        font-size: 1rem;
      }
  }

  a {
    color: var(--tertiary);
    text-decoration: none;
    font-weight: bold;
  }

`;
