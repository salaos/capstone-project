// display all the challenges in a grid format

import NoCard from "./NoCard";
import { useState } from "react";
import {
  SmallRoundButton,
  Checkbox,
  Card,
  Paragraph,
  CardContainer,
  ImageContainer,
} from "./StyledComponents";
import Router from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function ChallengeList({ challenges, onDelete }) {
  const [expandedChallenge, setExpandedChallenge] = useState(null);

  function toggleExpand(id) {
    if (id === expandedChallenge) {
      setExpandedChallenge(null);
    } else {
      setExpandedChallenge(id);
    }
  }

  function handleCheck(challenge) {
    if (!challenge.done) {
      challenge.done = true;
      const gif = document.createElement("img");
      gif.src = "/images/explosion.gif";
      gif.style.position = "fixed";
      gif.style.top = "30%";
      gif.style.right = "5%";
      gif.style.width = "80%";
      gif.style.height = "auto";

      document.body.appendChild(gif);
      setTimeout(() => {
        document.body.removeChild(gif);

        Router.push("/wellDone");
      }, 1500);
    } else {
      challenge.done = false;
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

            <Checkbox
              type="checkbox"
              id="done"
              name="done"
              value="done"
              checked={challenge.done}
              onChange={() => handleCheck(challenge)}

            />

            {expandedChallenge === challenge.id && (
              <>
                <h2>
                  <SmallRoundButton onClick={() => onDelete(challenge.id)}>
                    ✖︎
                  </SmallRoundButton>
                </h2>
                <ImageContainer>
                  <WanderingImage
                    src={challenge.ghost}
                    alt="ghost"
                    width={70}
                    height={70}
                  />
                </ImageContainer>
                <Paragraph>
                  <h3>Level: {challenge.level} </h3>
                </Paragraph>

                <Paragraph>
                  <h3>The Adventure... </h3>
                  {challenge.description}
                </Paragraph>

                <Paragraph>
                  <h3>The Risk... </h3>
                  {challenge.worstcase}
                </Paragraph>
                <Paragraph>
                  <h3>The Price... </h3>
                  {challenge.bestcase}
                </Paragraph>
              </>
            )}
          </Card>
        ))
      )}
    </CardContainer>
  );
}

// box-shadow: 10px 8px 0px 0 var(--primary);

const WanderingImage = styled(Image)`
  animation: 5s linear 0s normal none infinite running ghost;
  @keyframes ghost {
    0% {
      transform: translate(0, 5px);
    }
    25% {
      transform: translate(5px, 10px);
    }
    50% {
      transform: translate(10px, 5px);
    }
    75% {
      transform: translate(-5px, 0px);
    }
    100% {
      transform: translate(0, 5px);
    }
  }
`;
