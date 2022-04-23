import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useSelectedNumbers from "../hooks/useSelectedNumbers";
import Numbers from "./Numbers";
import NumbersToolbar from "./NumbersToolbar";
import { Button } from "./shared";

const GameContentWrap = styled.div`
  overflow: auto;
`;

const BetButton = styled(Button)`
  margin-top: 3rem;
  flex-shrink: 0;
`;

const GameContent = () => {
  const [numbers] = useSelectedNumbers();

  return (
    <Fragment>
      <NumbersToolbar />
      <GameContentWrap>
        <Numbers selectedNumbers={numbers} />
      </GameContentWrap>

      <BetButton variant="primary" as={Link} to="bet">
        Place Bet
      </BetButton>
    </Fragment>
  );
};

export default GameContent;
