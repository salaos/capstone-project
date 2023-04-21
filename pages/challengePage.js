import React from "react";
import ChallengeList from "../components/Challenges";
import {
  RoundButton,
  RoundButtonOverview,
  RoundButtonInfo,
} from "../components/StyledButtons";
import Link from "next/link";

export default function ChallengePage({ challenges, onDelete }) {
  return (
    <main>
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
