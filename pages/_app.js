import Head from "next/head";
import GlobalStyle from "../styles";
import { initialChallenges } from "../lib/db.js";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [challenges, setChallenges] = useState(initialChallenges);

  const handleAddChallenge = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  const onDelete = (id) => {
    if (confirm("Are you sure you want to delete this challenge?")) {
      alert("Challenge deleted");
    } else {
      return;
    }

    const newChallenges = challenges.filter((challenge) => challenge.id !== id);
    setChallenges(newChallenges);
  };

  return (
    <>
      <Head>
        <title>My Challenges</title>
      </Head>

      <GlobalStyle />

      <Component
        {...pageProps}
        challenges={challenges}
        onAddChallenge={handleAddChallenge}
        onDelete={onDelete}
      />
    </>
  );
}
