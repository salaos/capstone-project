// page that lists "my challenges"
import React from "react";
import ChallengeList from "../components/Challenges";
import {
  RoundButton,
  RoundButtonOverview,
} from "../components/StyledComponents";
import Link from "next/link";

export default function Challenges({ challenges, onDelete }) {
  return (
    <main>
      <h1>My Challenges</h1>

      <ChallengeList challenges={challenges} onDelete={onDelete} />
      <Link href="/form" aria-label="add new challenge">
        <RoundButton>✚</RoundButton>
      </Link>
      <Link href="/wellDone" aria-label="add new challenge">
        <RoundButtonOverview>✓</RoundButtonOverview>
      </Link>
    </main>
  );
}
