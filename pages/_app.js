import { useState } from "react";
import ChallengeForm from "../components/ChallengeForm";
import ChallengeList from "../components/Challenges";
import Head from "next/head";
import GlobalStyle from "../styles";

export default function App({ initChallenges }) {
  const [challenges, setChallenges] = useState(initChallenges);

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
        <ChallengeList challenges={challenges} />
      </main>
    </>
  );
}

App.getInitialProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  let initChallenges = [];
  try {
    const resp = await fetch(`${baseUrl}/api/challenges`);
    if (resp.status < 200 || resp.status > 299) {
      throw new Error(
        `Cannot fetch challenges, got statusCode: ${resp.status}`
      );
    }
    initChallenges = await resp.json();
  } catch (e) {
    console.log(e);
  }
  return { initChallenges };
};
