import styled from "styled-components";

export const RoundButtonOverview = styled.button`
  position: fixed;
  bottom: 4rem;
  left: -0.7rem;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  z-index: 20;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--primarymid);
  box-shadow: 6px 5px 0px 0 var(--primary);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 2.2rem;

  &:hover {
    transform: scale(1.05);
    background: var(--primary);
    box-shadow: 6px 5px 0px 0 var(--primarymid);
    color: white;
  }
`;

export const RoundButtonBack = styled.button`
  position: fixed;
  bottom: 0;
  left: -0.7rem;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  z-index: 20;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--tertiary);
  box-shadow: 6px 5px 0px 0 var(--tertiarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiarymid);
    box-shadow: 6px 5px 0px 0 var(--tertiary);
    color: white;
  }
`;

export const SmallRoundButton = styled.button`
  position: fixed;
  bottom: -2.8rem;
  right: -2.8rem;
  display: flex;
  justify-content: center;
  width: 0.5rem;
  height: 0.5rem;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--tertiarymid);
  box-shadow: 6px 5px 0px 0 var(--tertiary);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    transform: scale(1.05);
    background: var(--alertmid);
    box-shadow: 6px 5px 0px 0 var(--alert);
    color: white;
  }
`;

export const StyledButtonPurple = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 10px;
  background: var(--tertiary);
  box-shadow: 6px 5px 0px 0 var(--tertiarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiary);
    box-shadow: 6px 5px 0px 0 var(--tertiarymid);
    color: white;
  }

  a {
    color: white;
  }
`;

export const StyledButtonTeal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 10px;
  background: var(--secondary);
  box-shadow: 6px 5px 0px 0 var(--secondarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiary);
    box-shadow: 6px 5px 0px 0 var(--tertiarymid);
    color: white;
  }

  a {
    color: white;
  }
`;

export const RoundButtonSkip = styled.button`
  position: fixed;
  bottom: 0rem;
  right: -0.7rem;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  z-index: 20;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--tertiary);
  box-shadow: 6px 5px 0px 0 var(--tertiarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiarymid);
    box-shadow: 6px 5px 0px 0 var(--tertiary);
    color: white;
  }
  }
`;

export const StyledButtonIntro = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 10px;
  background: var(--secondary);
  box-shadow: 6px 5px 0px 0 var(--secondarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiary);
    box-shadow: 6px 5px 0px 0 var(--tertiarymid);
    color: white;
  }

  a {
    color: white;
  }
`;

export const RoundButton = styled.button`
  position: fixed;
  bottom: 0rem;
  left: -0.7rem;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--secondary);
  box-shadow: 6px 5px 0px 0 var(--secondarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.05);
    background: var(--secondarymid);
    box-shadow: 6px 5px 0px 0 var(--secondary);
    color: white;
  }
`;

export const RoundButtonInfo = styled.button`
  position: fixed;
  bottom: 8rem;
  left: -0.7rem;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  align-items: center;
  margin: 2rem;
  padding: 0.8rem;
  border: 2px solid var(--stroke);
  border-radius: 500px;
  background: var(--tertiary);
  box-shadow: 6px 5px 0px 0 var(--tertiarymid);
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.05);
    background: var(--tertiarymid);
    box-shadow: 6px 5px 0px 0 var(--tertiary);
    color: white;
  }
`;
