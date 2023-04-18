// display all the challenges in a grid format

import NoCard from "./NoCard";
import { useState } from "react";
import {
  SmallRoundButton,
  Checkbox,
  Card,
  Paragraph,
  CardContainer,
} from "./StyledComponents";

export default function ChallengeList({ challenges, onDelete }) {
  const [expandedChallenge, setExpandedChallenge] = useState(null);

  function toggleExpand(id) {
    if (id === expandedChallenge) {
      setExpandedChallenge(null);
    } else {
      setExpandedChallenge(id);
    }
  }

  console.log(onDelete);
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
            ></Checkbox>

            {expandedChallenge === challenge.id && (
              <>
                <h2>
                  <SmallRoundButton onClick={() => onDelete(challenge.id)}>
                    ✖︎
                  </SmallRoundButton>
                </h2>
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
