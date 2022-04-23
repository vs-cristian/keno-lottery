import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/shared";
import useBet from "../hooks/useBet";

const WinScreenRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const WinScreenLogo = styled.img`
  width: 14rem;
`;

const WinScreenTitle = styled.h1`
  margin: 2.4rem 0 1.4rem;
  font-size: 4rem;
`;

const WinScreenText = styled.p`
  display: block;
  font-weight: 400;
  font-size: 1.6rem;
  opacity: 0.45;
`;

const WinScreenMenu = styled.div`
  width: 60%;
  margin-top: 10rem;

  & > * {
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;

const WinScreen = () => {
  const [bet] = useBet();

  return (
    <WinScreenRoot>
      <WinScreenLogo src="/images/win.png" alt="keno logo" />
      <WinScreenTitle>
        You Won <br />${bet},000
      </WinScreenTitle>
      <WinScreenText>
        Congratulations! <br /> You've won the lottery
      </WinScreenText>

      <WinScreenMenu>
        <Button variant="secondary" as={Link} to="/">
          Go Home
        </Button>
      </WinScreenMenu>
    </WinScreenRoot>
  );
};

export default WinScreen;
