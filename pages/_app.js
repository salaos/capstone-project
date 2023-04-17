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
