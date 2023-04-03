import { useState } from "react";
import ChallengeForm from "../components/ChallengeForm";
import CardContainer from "../components/Challenges";
import Head from "next/head";
import GlobalStyle from "../styles";

export default function App() {
  const [challenges, setChallenges] = useState([]);

  const handleAddChallenge = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  return (
    <>
      <Head>
        <title>My Challenges</title>
      </Head>
      <main>
        <h1>My Challenges</h1>
        <GlobalStyle />
        <ChallengeForm onAddChallenge={handleAddChallenge} />
        <CardContainer challenges={challenges} />
      </main>
    </>
  );
}
