import styled from "styled-components";
import useSelectedNumbers from "../hooks/useSelectedNumbers";
import { ReactComponent as ResetIcon } from "../icons/reset.svg";
import { ReactComponent as DiceIcon } from "../icons/dice.svg";
import { IconButton } from "./shared";

const NumbersToolbarRoot = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;

  & > *:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const NumbersToolbar = () => {
  const [, { resetNumbers, randomizeNumbers }, meta] = useSelectedNumbers();

  return (
    <NumbersToolbarRoot>
      <IconButton onClick={resetNumbers} disabled={meta.isEmpty}>
        <ResetIcon />
      </IconButton>
      <IconButton onClick={randomizeNumbers}>
        <DiceIcon />
      </IconButton>
    </NumbersToolbarRoot>
  );
};

export default NumbersToolbar;
