import React, { useState } from "react";
import styled from "styled-components";

import {
  StyledForm,
  StyledInput,
  StyledBox,
  StyledRange,
  StyledButton,
} from "../components/StyledComponents";

async function persistAddedChallenge(challenge) {
  const baseUrl = "http://localhost:3000";
  const resp = await fetch(`${baseUrl}/api/challenges`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(challenge),
  });
  if (resp.status < 200 || resp.status > 299) {
    throw new Error(`Cannot add challenge, got statusCode: ${resp.status}`);
  }
  return await resp.json();
}

export default function ChallengeForm({ onAddChallenge }) {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    level: 1,
    bestcase: "",
    worstcase: "",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setChallenge({ ...challenge, [fieldName]: fieldValue });
  };
  const handleChangeNumber = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setChallenge({ ...challenge, [fieldName]: Number.parseInt(fieldValue) });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const persistedChallenge = await persistAddedChallenge(challenge);
    onAddChallenge(persistedChallenge);

    setChallenge({
      title: "",
      description: "",
      level: 1,
      bestcase: "",
      worstcase: "",
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h1>New Challenge</h1>

        <StyledBox>
          <p>I want to...</p>
        </StyledBox>

        <label htmlFor="title" />
        <StyledInput
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          maxLength="20"
          required="required"
          onChange={handleChange}
        />

        <label htmlFor="description" />
        <StyledInput
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          maxLength="100"
          onChange={handleChange}
        />

        <label htmlFor="bestcase" />
        <StyledInput
          type="text"
          id="bestcase"
          name="bestcase"
          placeholder="The Best Case"
          maxLength="100"
          onChange={handleChange}
        />

        <label htmlFor="worstcase" />
        <StyledInput
          type="text"
          id="worstcase"
          name="worstcase"
          placeholder="The Worst Case"
          maxLength="100"
          onChange={handleChange}
        />

        <StyledBox>
          <label htmlFor="level">
            <p>Difficulty Level {challenge.level}</p>
          </label>
        </StyledBox>

        <StyledRange
          type="range"
          name="level"
          id="level"
          min="1"
          max="5"
          step="1"
          placeholder="Level"
          value={challenge.level}
          onChange={handleChangeNumber}
        />

        <StyledButton type="submit">Add challenge</StyledButton>
      </StyledForm>
    </>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 1rem;
`;

const StyledCard = styled.div`
  background: var(--cardbackground);
  border: 3px solid var(--tertiarymid);
  border-radius: 20px;
  padding: 1.5rem;
  margin: 0.2rem 0 0.5rem 0;
  width: 83%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: 10px 8px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;
  h2 {
    color: var(--tertiary);
    opacity: 0.7;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 10px 8px 0px 0 var(--primary);
    h2 {
      opacity: 1;
    }
  }
`;
