import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/shared";
import useReset from "../hooks/useReset";
import logoSrc from "../images/logo.png";

const IntroScreenRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const IntroScreenLogo = styled.img`
  width: 14rem;
`;

const IntroScreenTitle = styled.h1`
  margin-top: 2.4rem;
  font-size: 8rem;

  span {
    display: block;
    font-weight: 400;
    font-size: 4rem;
    font-style: italic;
    opacity: 0.85;
  }
`;

const IntroScreenMenu = styled.div`
  width: 60%;
  margin-top: 10rem;

  & > * {
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;

const IntroScreen = () => {
  const reset = useReset();

  return (
    <IntroScreenRoot>
      <IntroScreenLogo src={logoSrc} alt="keno logo" />
      <IntroScreenTitle>
        Keno <span>Lottery</span>
      </IntroScreenTitle>

      <IntroScreenMenu>
        <Button variant="secondary" onClick={reset} as={Link} to="game">
          New Game
        </Button>
      </IntroScreenMenu>
    </IntroScreenRoot>
  );
};

export default IntroScreen;
