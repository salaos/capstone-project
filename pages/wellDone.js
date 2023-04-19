import Link from "next/link";
import React from "react";
import {
  RoundButton,
  RoundButtonBack,
  StyledContainer,
  ImageContainer,
} from "../components/StyledComponents";
import Image from "next/image";

export default function WellDonePage({ onAddChallenge }) {
  return (
    <main>
      <StyledContainer>
        <h1>Well done!</h1>
        <p>
          Look at the many tiny ghosts you already have helped to fight their
          fear!
        </p>
        <ImageContainer>
          <Image
            src={"/images/img1.png"}
            alt="profile pic"
            width={50}
            height={50}
          />
          <Image
            src={"/images/img2.png"}
            alt="profile pic"
            width={50}
            height={50}
          />
          <Image
            src={"/images/img3.png"}
            alt="profile pic"
            width={50}
            height={50}
          />
          <Image
            src={"/images/img16.png"}
            alt="profile pic"
            width={50}
            height={50}
          />
          <Image
            src={"/images/img5.png"}
            alt="profile pic"
            width={50}
            height={50}
          />
          <Image
            src={"/images/img8.png"}
            alt="profile pic"
            width={50}
            height={50}
          />
        </ImageContainer>
        <p>Create a new challenge or go back to your list of challenges.</p>

        <Link href="/" aria-label="back">
          <RoundButtonBack>❮</RoundButtonBack>
        </Link>
      </StyledContainer>
    </main>
  );
}
