import ChallengeForm from "../components/ChallengeForm";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <ChallengeForm />
      <h3>
        <Link href="..">Back to challenges</Link>
      </h3>
    </main>
  );
}
