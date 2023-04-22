import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { ImageContainer } from "./StyledComponents";

export default function Header() {
  return (
    <>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/salaos/capstone-project/main/public/images/logo.png"
          alt="logo"
          width={70}
          height={70}
        />
      </ImageContainer>
    </>
  );
}
