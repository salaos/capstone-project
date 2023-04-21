import NoCard from "./NoCard";
import { useState } from "react";
import {
  Checkbox,
  Card,
  Paragraph,
  CardContainer,
  ImageContainer,
} from "./StyledComponents";
import { SmallRoundButton } from "./StyledButtons";
import { WanderingImage } from "./StyledAnimation";
import Router from "next/router";

export default function ChallengeList({ challenges, onDelete }) {
  const [expandedChallenge, setExpandedChallenge] = useState(null);
  const [showPicture, setShowPicture] = useState(false);

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
      setShowPicture(true);

      setTimeout(() => {
        Router.push("/wellDone");
      }, 1500);
    } else {
      challenge.done = false;
      setShowPicture(false);
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
                {showPicture && (
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/explosion.gif"
                      alt="animation"
                      width="60%"
                      height="auto"
                      position="fixed"
                      align="right"
                    />
                  </div>
                )}

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
