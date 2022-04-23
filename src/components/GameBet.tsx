import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBet from "../hooks/useBet";
import useSelectedNumbers from "../hooks/useSelectedNumbers";
import Bet from "./Bet";
import { Button, VStack } from "./shared";

const GameBet = () => {
  const [bet] = useBet();
  const [, , meta] = useSelectedNumbers();
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate("/win");
  };

  return (
    <Fragment>
      <Bet />

      <VStack>
        <Button
          variant="primary"
          onClick={handleClickStart}
          disabled={Boolean(!meta.isFullFiled || !bet)}
        >
          Start
        </Button>
        <Button variant="secondary" as={Link} to="/game">
          Back
        </Button>
      </VStack>
    </Fragment>
  );
};

export default GameBet;
