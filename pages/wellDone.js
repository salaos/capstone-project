import Link from "next/link";
import React from "react";
import {
  RoundButtonBack,
  StyledContainer,
  ImageContainer,
} from "../components/StyledComponents";
import { BouncyImage1 } from "../components/StyledAnimation";

export default function WellDonePage({ challenges }) {
  function showDoneGhosts() {
    const doneGhosts = [];
    challenges.map((challenge) => {
      if (challenge.done === true) {
        doneGhosts.push(challenge.ghosthappy);
      }
    });
    return doneGhosts;
  }

  return (
    <main>
      <StyledContainer>
        <h1>Well done!</h1>
        <h2>Look at all the ghosts you helped to fight their fear!</h2>
        <ImageContainer>
          {showDoneGhosts().map((ghosthappy) => (
            <BouncyImage1 key={ghosthappy} src={ghosthappy} alt="happy ghost" />
          ))}
        </ImageContainer>
        <Link href="/" aria-label="back">
          <RoundButtonBack>❮</RoundButtonBack>
        </Link>
      </StyledContainer>
    </main>
  );
}
