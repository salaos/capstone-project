import {
  StyledBox,
  StyledForm,
  StyledInput,
  StyledRange,
  StyledButton,
} from "./StyledComponents";
import { useState } from "react";

export default function ChallengeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bestcase, setBestcase] = useState("");
  const [worstcase, setWorstcase] = useState("");
  const [level, setLevel] = useState(1);
  const [id, setId] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const newChallenge = {
      title,
      description,
      bestcase,
      worstcase,
      level,
      id,
    };
    console.log(newChallenge);
    setTitle("");
    setDescription("");
    setBestcase("");
    setWorstcase("");
    setLevel(1);
  }

  return (
    <>
      {" "}
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
          value={title}
          maxlength="20"
          required="required"
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description" />
        <StyledInput
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          maxlength="100"
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="bestcase" />
        <StyledInput
          type="text"
          id="bestcase"
          name="bestcase"
          placeholder="The Best Case"
          value={bestcase}
          maxlength="100"
          onChange={(event) => setBestcase(event.target.value)}
        />

        <label htmlFor="worstcase" />
        <StyledInput
          type="text"
          id="worstcase"
          name="worstcase"
          placeholder="The Worst Case"
          value={worstcase}
          maxlength="100"
          onChange={(event) => setWorstcase(event.target.value)}
        />

        <StyledBox>
          <label htmlFor="level">
            <p>Difficulty Level {level}</p>
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
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        />

        <StyledButton>Add challenge</StyledButton>
      </StyledForm>
    </>
  );
}
