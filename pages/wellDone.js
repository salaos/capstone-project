import Link from "next/link";
import React from "react";
import {
  RoundButton,
  RoundButtonBack,
  StyledContainer,
  ImageContainer,
} from "../components/StyledComponents";
import Image from "next/image";
import styled from "styled-components";

export default function WellDonePage({ onAddChallenge }) {
  return (
    <main>
      <StyledContainer>
        <h1>Well done!</h1>
        <h2>
          Look at the many tiny ghosts you've already helped to fight their
          fear!
        </h2>

        <Link href="/" aria-label="back">
          <RoundButtonBack>❮</RoundButtonBack>
        </Link>
      </StyledContainer>
    </main>
  );
}
