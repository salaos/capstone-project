import React from "react";
import ChallengeList from "../components/Challenges";
import {
  RoundButton,
  RoundButtonOverview,
  RoundButtonInfo,
} from "../components/StyledButtons";
import Link from "next/link";
import { ImageContainer } from "../components/StyledComponents";

export default function ChallengePage({ challenges, onDelete }) {
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
      <ChallengeList challenges={challenges} onDelete={onDelete} />

      <Link href="/" aria-label="back to intro">
        <RoundButtonInfo>i</RoundButtonInfo>
      </Link>

      <Link href="/form" aria-label="add new challenge">
        <RoundButton>✚</RoundButton>
      </Link>
      <Link href="/wellDone" aria-label="go to overview">
        <RoundButtonOverview>✓</RoundButtonOverview>
      </Link>
    </main>
  );
}
