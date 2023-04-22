import Link from "next/link";
import React from "react";
import {
  StyledContainer,
  ImageContainer,
} from "../components/StyledComponents";
import { RoundButtonBack } from "../components/StyledButtons";
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
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/logo.png"
          alt="logo"
          width={100}
          height="auto"
        />
      </ImageContainer>
      <StyledContainer>
        <h1>Well done!</h1>
        <h2>Look at all the ghosts you helped to fight their fear!</h2>
        <ImageContainer>
          {showDoneGhosts().map((ghosthappy) => (
            <BouncyImage1 key={ghosthappy} src={ghosthappy} alt="happy ghost" />
          ))}
        </ImageContainer>
        <Link href="/challengePage" aria-label="back">
          <RoundButtonBack>❮</RoundButtonBack>
        </Link>
      </StyledContainer>
    </main>
  );
}
