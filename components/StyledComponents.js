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

export const RoundButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--secondary);
  box-shadow: 6px 5px 0px 0 var(--secondarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiary);
    box-shadow: 6px 5px 0px 0 var(--tertiarymid);
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

export const SmallRoundButton = styled.button`
  position: fixed;
  bottom: -2.8rem;
  right: -2.8rem;
  display: flex;
  justify-content: center;
  width: 0.5rem;
  height: 0.5rem;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--tertiarymid);
  box-shadow: 6px 5px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    transform: scale(1.05);
    background: var(--alertmid);
    box-shadow: 6px 5px 0px 0 var(--alert);
    color: white;
  }
`;

export const Checkbox = styled.input`
  position: relative;
  float: right;
  margin: 0 0.2rem 0.3rem 0;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  ::before {
    width: 30px;
    height: 30px;
    background-color: var(--cardbackground);
    box-shadow: 4px 4px 0px 0 var(--tertiary);
    border: 2px solid var(--stroke);
    transition: all 0.3s ease-in-out;
    border-radius: 20%;
    content: "";
    float: left;
    margin-right: 5px;
    z-index: 5;
    position: relative;
    pointer-events: none;
  }

  :checked::before {
    background-color: var(--tertiarymid);
    border: 2px solid var(--stroke);
    transition: all 0.3s ease-in-out;
  }

  :checked::after {
    content: "✓";
    color: var(--cardbackground);
    font-size: 1.8rem;
    z-index: 10;
    position: absolute;
    top: -3px;
    left: 4px;
    right: 0;
    bottom: 3px;
    margin: auto;
  }
`;

export const Card = styled.div`
background: var(--cardbackground);
border: 3px solid var(--tertiarymid);
border-radius: 20px;
padding: 1.2rem;
margin: 0.2rem 0.2rem 0.5rem 0;
width: 86%;
height: auto;

align-items: center;
text-align: left;
box-shadow: 10px 8px 0px 0 var(--tertiary);
transition: all 0.3s ease-in-out;
font-size: 0.8rem;
h2 {
  padding: 2px;
  color: var(--tertiary);
  opacity: 0.7;
  text-align: left;
  display: inline;

}

  &:hover {
    transform: scale(1.03);
    box-shadow: 10px 8px 0px 0 var(--primary);
    h2 {
      opacity: 1;
    }
  }
}
`;

export const Paragraph = styled.div`
  margin: 0.8rem 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 1rem;
`;
