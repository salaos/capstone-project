import styled from "styled-components";

export const StyledForm = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 3rem 2rem 3rem;
  padding: 1rem;
  border: 3px solid var(--tertiarymid);
  border-radius: 20px;
  background: var(--cardbackground);
  box-shadow: 10px 8px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    margin: 2rem 10rem 0 9rem;
  }

  @media (min-width: 1024px) {
    margin: 2rem 15rem 0 14rem;
  }

  h2 {
    color: var(--headline);
  }

  p {
    text-align: left;
    width: 70%;

    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
  }
`;

export const StyledInput = styled.input`
  width: 70%;
  height: auto;
  margin: 1em;
  padding: 0.5rem;
  border: 2px solid var(--stroke);
  border-radius: 10px;
  background: var(--cardbackground);
  box-shadow: 6px 5px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 6px 5px 0px 0 var(--primary);
  }
`;

export const StyledRange = styled.input`
  -webkit-appearance: none;
  background-color: var(--cardbackground);
  border: 2px solid var(--stroke);
  border-radius: 10px;

  accent-color: var(--stroke);
  background: var(--cardbackground);
  box-shadow: 6px 5px 0px 0 var(--tertiary);
  cursor: ew-resize;

  width: 70%;
  height: 10px;
  margin: 1em;
  padding: 0.5rem;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 6px 5px 0px 0 var(--primary);
  }
`;

export const StyledBox = styled.div`
  justify-content: center;

  width: 70%;
  height: 2em;
  margin: 2em 0 -16px 0;
  padding: 0rem 0rem 0rem 0.2rem;
  border: 2px solid var(--stroke);
  border-radius: 10px;
  background: var(--tertiary);
  box-shadow: 6px 5px 0px 0 var(--tertiarymid);
  transition: all 0.3s ease-in-out;

  p {
    font-size: 0.8rem;
    color: white;
    margin: 0.4rem 0 0.4rem 0.4rem;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 10px;
  background: var(--secondary);
  box-shadow: 6px 5px 0px 0 var(--secondarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiary);
    box-shadow: 6px 5px 0px 0 var(--tertiarymid);
    color: white;
  }

  a {
    color: white;
  }
`;

export const StyledBoxWhite = styled.span`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.2rem;
  justify-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;

  width: 83%;
  height: auto;

  border: 2px solid var(--stroke);
  border-radius: 20px;
  background: var(--cardbackground);
  box-shadow: 10px 8px 0px 0 var(--secondary);
  transition: all 0.3s ease-in-out;
  text-align: center;

  



  h2 {
    color: var(--headline);
  }

  p {
    width: 70%;
    margin: 0;

    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  button {  
    margin: 1.5rem;
`;
