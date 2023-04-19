import Link from "next/link";
import React from "react";
import {
  RoundButton,
  RoundButtonBack,
  StyledContainer,
  ImageContainer,
} from "../components/StyledComponents";
import {
  BouncyImage1,
  BouncyImage2,
  BouncyImage3,
} from "../components/StyledAnimation";

export default function WellDonePage({ onAddChallenge }) {
  return (
    <main>
      <StyledContainer>
        <h1>Well done!</h1>
        <h2>Look at all the ghosts you helped to fight their fear!</h2>
        <ImageContainer>
          <BouncyImage1
            src={
              "https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy1.png"
            }
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage2
            src={
              "https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy2.png"
            }
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage3
            src={
              "https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy3.png"
            }
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage2
            src={
              "https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy12.png"
            }
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage3
            src={
              "https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy6.png"
            }
            alt="ghosthappy"
            width={50}
            height={50}
          />
          <BouncyImage1
            src={
              "https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy8.png"
            }
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
