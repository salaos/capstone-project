// display all the challenges in a grid format

import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 1rem;
`;

export default function CardContainer({ children }) {
  return <StyledCardContainer>{children}</StyledCardContainer>;
}
