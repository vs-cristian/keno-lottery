import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Bet from "../components/Bet";
import Numbers from "../components/Numbers";
import NumbersToolbar from "../components/NumbersToolbar";
import { Button, VStack } from "../components/shared";
import useSelectedNumbers from "../hooks/useSelectedNumbers";

const AppTitle = styled.h2`
  font-size: 2.8rem;
  padding: 1rem 0 3.2rem;

  span {
    font-weight: 300;
    display: block;
  }
`;

const SelectedNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectedNumber = styled(Button)<{ active?: boolean }>`
  background: ${(p) => (p.active ? "#fff" : "#3A38AE")};
  ${(p) =>
    !p.active &&
    css`
      box-shadow: inset 0 0.1rem 0 0.1rem rgb(0 0 0 / 25%);
    `}
  color: #4a48ac;
  font-size: 2rem;
  font-weight: bold;
  width: 4.6rem;
`;

const MainContainer = styled.div`
  background: #fff;
  border-radius: 3.2rem;
  height: 30rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem 2rem 2.4rem;
`;

const HeadContainer = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 4rem;
`;

const GameScreen = () => {
  const [numbers, { unselectNumberByIndex }] = useSelectedNumbers();

  return (
    <Fragment>
      <HeadContainer>
        <AppTitle>
          Choose <span>5 numbers</span>
        </AppTitle>

        <SelectedNumbersContainer>
          {numbers.map((number, index) => (
            <SelectedNumber
              active={Boolean(number)}
              onClick={() => unselectNumberByIndex(index)}
              key={index}
            >
              {number}
            </SelectedNumber>
          ))}
        </SelectedNumbersContainer>
      </HeadContainer>

      <MainContainer>
        <Routes>
          <Route
            index
            element={
              <Fragment>
                <div>
                  <NumbersToolbar />
                  <Numbers selectedNumbers={numbers} />
                </div>

                <Button variant="primary" as={Link} to="bet">
                  Place Bet
                </Button>
              </Fragment>
            }
          />

          <Route
            path="bet"
            element={
              <Fragment>
                <Bet />

                <VStack>
                  <Button variant="primary">Start</Button>
                  <Button variant="secondary" as={Link} to="/game">
                    Back
                  </Button>
                </VStack>
              </Fragment>
            }
          />
        </Routes>
      </MainContainer>
    </Fragment>
  );
};

export default GameScreen;
