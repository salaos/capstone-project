//
import styled from "styled-components";
import React from "react";

const DefaultCard = styled.div`
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

export default function NoCard() {
  return (
    <DefaultCard>
      <h2>Nothing to do ... Create a new Card!</h2>
    </DefaultCard>
  );
}
