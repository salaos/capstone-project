import ChallengeForm from "../components/ChallengeForm";
import Link from "next/link";
import React from "react";
import { RoundButtonBack } from "../components/StyledButtons";

export default function FormPage({ onAddChallenge }) {
  return (
    <main>
      <ChallengeForm onAddChallenge={onAddChallenge} />
      <Link href="/challengePage" aria-label="back">
        <RoundButtonBack>❮</RoundButtonBack>
      </Link>
    </main>
  );
}
