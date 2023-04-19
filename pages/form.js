import ChallengeForm from "../components/ChallengeForm";
import Link from "next/link";
import React from "react";
import { RoundButtonBack } from "../components/StyledComponents";

export default function FormPage({ onAddChallenge }) {
  return (
    <main>
      <ChallengeForm onAddChallenge={onAddChallenge} />
      <Link href="/" aria-label="back">
        <RoundButtonBack>❮</RoundButtonBack>
      </Link>
    </main>
  );
}
