import { useState, useEffect } from "react";
import ChallengeCard from "./ChallengeCard";

function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch("/api/challenges")
      .then((res) => res.json())
      .then((data) => setChallenges(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCreateChallenge = (challenge) => {
    fetch("/api/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(challenge),
    })
      .then((res) => res.json())
      .then((data) => setChallenges([...challenges, data]))
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <header>
        <h1>Challenges</h1>
      </header>
      <main>
        <div className="challenge-list">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))}
        </div>
        <div className="create-challenge">
          <h2>Create a Challenge</h2>
          <ChallengeForm onCreateChallenge={handleCreateChallenge} />
        </div>
      </main>
    </div>
  );
}

export default App;
