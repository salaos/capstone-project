// This is a card component that will be used to display the challenges

import styled from "styled-components";

const StyledCard = styled.div`
  background: var(--cardbackground);
  border: 4px solid var(--stroke);
  border-radius: 20px;
  padding: 1.5rem;
  margin: 0.2rem 0 0.5rem 0;
  width: 83%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: 10px 8px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;
  h2 {
    color: var(--tertiary);
    opacity: 0.7;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 10px 8px 0px 0 var(--primary);
    h2 {
      opacity: 1;
    }
  }
`;

const NoCard = styled.div`
  background: var(--cardbackground);
  border: 4px solid var(--stroke);
  border-radius: 20px;
  padding: 4rem;
  margin: 0.2rem 0 0.5rem 0;
  width: 83%;
  height: 100px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 10px 8px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;
  opacity: 0.3;
  line-height: 1.3;
`;

export default function Card({ challenge }) {
  return (
    <StyledCard>
      <h2>{challenge.title}</h2>
    </StyledCard>
  );
}
