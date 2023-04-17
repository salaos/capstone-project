// display all the challenges in a grid format

import styled from "styled-components";
import NoCard from "./NoCard";
import { useState } from "react";

export default function ChallengeList({ challenges }) {
  const [expandedChallenge, setExpandedChallenge] = useState(null);

  function toggleExpand(id) {
    if (id === expandedChallenge) {
      setExpandedChallenge(null);
    } else {
      setExpandedChallenge(id);
    }
  }

  return (
    <CardContainer>
      {challenges.length === 0 ? (
        <NoCard />
      ) : (
        challenges.map((challenge) => (
          <Card
            key={challenge.id}
            challenge={challenge}
            onClick={() => toggleExpand(challenge.id)}
          >
            <h2>{expandedChallenge === challenge.id ? "▼" : "▶︎"}</h2>
            <h2>{challenge.title}</h2>

            {expandedChallenge === challenge.id && (
              <>
                <p>
                  <h3>Level: {challenge.level} </h3>
                </p>
                <p>
                  <h3>Info: </h3>
                  {challenge.description}
                </p>
                <p>
                  <h3>Best Case: </h3>
                  {challenge.bestcase}
                </p>
                <p>
                  <h3>Worst Case: </h3>
                  {challenge.worstcase}
                </p>
                <p>
                  <h3>{challenge.realcase ? "Info: " : ""} </h3>
                  {challenge.realcase}
                </p>
              </>
            )}
          </Card>
        ))
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 1rem;
`;

// This is a card component that will be used to display the challenges

const Card = styled.div`
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
