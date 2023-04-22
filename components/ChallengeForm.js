import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { uid } from "uid";
import { ImageContainer } from "../components/StyledComponents";

import {
  StyledForm,
  StyledInput,
  StyledBox,
  StyledRange,
} from "../components/StyledComponents";
import { StyledButtonPurple } from "../components/StyledButtons";

export default function ChallengeForm({ onAddChallenge }) {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    level: 1,
    bestcase: "",
    worstcase: "",
  });

  const router = useRouter();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const ghostNumber = Math.floor(Math.random() * 20) + 1;

    const newChallenge = {
      ...challenge,
      id: uid(),
      done: false,
      ghost: `https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/img${ghostNumber}.png`,
      ghosthappy: `https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy${ghostNumber}.png`,
    };
    onAddChallenge(newChallenge);

    router.push("/challengePage");
  };

  return (
    <>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/logo.png"
          alt="logo"
          width={100}
          height="auto"
        />
      </ImageContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledBox>
          <p>Next Challenge?</p>
        </StyledBox>

        <label htmlFor="title" />
        <StyledInput
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          maxLength="23"
          required="required"
          onChange={handleChange}
        />

        <label htmlFor="description" />
        <StyledInput
          type="text"
          id="description"
          name="description"
          placeholder="The Adventure ..."
          maxLength="100"
          onChange={handleChange}
        />

        <label htmlFor="bestcase" />
        <StyledInput
          type="text"
          id="bestcase"
          name="bestcase"
          placeholder="The Price ..."
          maxLength="100"
          onChange={handleChange}
        />

        <label htmlFor="worstcase" />
        <StyledInput
          type="text"
          id="worstcase"
          name="worstcase"
          placeholder="The Risk ..."
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

        <StyledButtonPurple type="submit">Add Challenge</StyledButtonPurple>
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
