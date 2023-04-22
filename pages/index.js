import React, { useState } from "react";
import {
  RoundButtonBack,
  StyledButtonIntro,
  StyledButtonPurple,
} from "../components/StyledButtons";
import {
  StyledIntroCard,
  ImageContainer,
  Checkbox,
} from "../components/StyledComponents";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [checked, setChecked] = useState(false);
  const disappearOnClick = () => {
    setIsVisible(false);

    setTimeout(() => {
      Router.push("#intro1");
    }, 1000);
  };

  const appearOnClick = () => {
    setIsVisible(true);

    setTimeout(() => {
      Router.push("#intro2");
    }, 1500);
  };

  const jumpOnClick = () => {
    setIsMoving(true);
    setTimeout(() => {
      Router.push("#intro3");
    }, 2000);
  };

  const appearOnCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <main>
      <Link href="/challengePage" aria-label="add new challenge">
        <RoundButtonBack>❯</RoundButtonBack>
      </Link>

      <StyledIntroCard>
        <img
          src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/logo.png"
          alt="logo"
          width={100}
          height="auto"
        />

        <h1></h1>
        <CenteredCopy>
          Hi there! Do you ever feel scared or nervous about situations, even if
          you know it&apos;s not really dangerous?{" "}
        </CenteredCopy>
        <CenteredCopy>
          Like when talking in front of people. Do you want to ...
        </CenteredCopy>
        <ImageContainer>
          <DisappearingImage
            src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/img2.png"
            alt="ghost"
            width={70}
            height={70}
            isVisible={isVisible}
          />
        </ImageContainer>

        <StyledButtonIntro onClick={disappearOnClick}>
          disappear?
        </StyledButtonIntro>
      </StyledIntroCard>
      <AnchorPosition name="intro1"></AnchorPosition>

      <StyledIntroCard>
        <h1>that&apos;s okay!</h1>
        <CenteredCopy>
          We all feel it sometimes. It&apos;s like having a tiny ghost in our
          heads that scares us when we are in danger.
        </CenteredCopy>
        <ImageContainer>
          <AppearingImage
            src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy2.png"
            alt="ghost"
            width={70}
            height={70}
            isVisible={!isVisible}
          />
        </ImageContainer>

        <StyledButtonIntro onClick={appearOnClick}>
          Call Ghost!
        </StyledButtonIntro>
      </StyledIntroCard>

      <AnchorPosition name="intro2"></AnchorPosition>
      <StyledIntroCard>
        <h1>but sometimes ...</h1>
        <CenteredCopy>
          ... they are doing their job even in safe situations.
        </CenteredCopy>
        <CenteredCopy>
          Let&apos;s train Shaky Sammy and his friends to get more confident.
        </CenteredCopy>
        <ImageContainer>
          <JumpingImage
            src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy8.png"
            alt="ghost"
            width={50}
            height={50}
            isMoving={!isMoving}
          />
          <JumpingImage
            src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy2.png"
            alt="ghost"
            width={70}
            height={70}
            isMoving={!isMoving}
          />
          <JumpingImage
            src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/imghappy18.png"
            alt="ghost"
            width={50}
            height={50}
            isMoving={!isMoving}
          />
        </ImageContainer>

        <StyledButtonIntro onClick={jumpOnClick}>Yeah!</StyledButtonIntro>
      </StyledIntroCard>

      <AnchorPosition name="intro3"></AnchorPosition>
      <StyledIntroCard>
        <h1>Go Sammy!</h1>

        <CenteredCopy>
          All you have to do, is choose a challenge and complete it.
        </CenteredCopy>
        <CenteredCopy>
          When you are done with a challenge, you can click on the checkmark.
          Try it:
        </CenteredCopy>
        <CheckboxStyling>
          <Checkbox
            type="checkbox"
            id="done"
            name="done"
            value="done"
            onClick={appearOnCheckbox}
          />
        </CheckboxStyling>

        <StartAppear isVisible={!checked}>
          <CenteredCopy>
            Great! Now you are ready to start your first challenge!
          </CenteredCopy>

          <Link href="/challengePage" aria-label="add new challenge">
            <StyledButtonPurple>Let&apos;s start!</StyledButtonPurple>
          </Link>
        </StartAppear>
      </StyledIntroCard>
    </main>
  );
}

const CenteredCopy = styled.p`
  text-align: center;
  margin: 5px auto;
  width: 80%;
`;

const AnchorPosition = styled.div`
  position: relative;
  top: -30px;
`;

const DisappearingImage = styled.img`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const AppearingImage = styled.img`
  opacity: ${(props) => (props.isVisible ? 0 : 1)};
  transition: opacity 1s ease-in-out;
`;

const CheckboxStyling = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

const StartAppear = styled.div`
  opacity: ${(props) => (props.isVisible ? 0 : 1)};
  transition: opacity 1s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const JumpingImage = styled.img`
  animation: ${(props) => (props.isMoving ? "none" : "jump 1s infinite")};
  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
