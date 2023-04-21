import styled from "styled-components";

export const WanderingImage = styled.img`
  animation: 5s linear 0s normal none infinite running ghost;
  @keyframes ghost {
    0% {
      transform: translate(0, 5px);
    }
    25% {
      transform: translate(5px, 10px);
    }
    50% {
      transform: translate(10px, 5px);
    }
    75% {
      transform: translate(-5px, 0px);
    }
    100% {
      transform: translate(0, 5px);
    }
  }
`;

export const BouncyImage1 = styled.img`
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

export const BouncyImage2 = styled.img`
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

export const BouncyImage3 = styled.img`
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
