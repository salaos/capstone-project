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
        <ImageContainer>
          <BouncyImage1
            src={"/images/imghappy1.png"}
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage2
            src={"/images/imghappy2.png"}
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage3
            src={"/images/imghappy3.png"}
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage2
            src={"/images/imghappy16.png"}
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage3
            src={"/images/imghappy5.png"}
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage1
            src={"/images/imghappy8.png"}
            alt="ghosthappy"
            width={50}
            height={50}
          />
        </ImageContainer>
        <Link href="/" aria-label="back">
          <RoundButtonBack>❮</RoundButtonBack>
        </Link>
      </StyledContainer>
    </main>
  );
}
const BouncyImage1 = styled.img`
  animation: bounce 0.3s infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);

      opacity: 0.9;
    }
  }
`;
const BouncyImage2 = styled.img`
  animation: bounce 0.2s infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);

      opacity: 0.9;
    }
  }
`;
const BouncyImage3 = styled.img`
  animation: bounce 0.4s infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);

      opacity: 0.9;
    }
  }
`;
