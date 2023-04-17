import Head from "next/head";
import GlobalStyle from "../styles";
import { initialChallenges } from "../lib/db.js";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [challenges, setChallenges] = useState(initialChallenges);

  const handleAddChallenge = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  // hier deleteChallenge

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
      />
    </>
  );
}
