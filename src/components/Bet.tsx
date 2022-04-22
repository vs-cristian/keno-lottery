import { ChangeEvent } from "react";
import styled from "styled-components";
import useBet from "../hooks/useBet";
import { ButtonBase } from "./shared";

const BetRoot = styled.div``;

const Templates = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 5rem;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const TemplateButton = styled(ButtonBase)`
  width: 100%;
  background: #f4f5fb;
  color: #545682;
  font-weight: bold;

  &:active {
    background-color: #e1e2e5;
  }
`;

const Input = styled.input`
  background: #f4f5fb;
  border: 0.2rem solid #d0cfdc;
  border-radius: 1.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  padding: 1.2rem;
  width: 100%;
  text-align: center;
`;

const Label = styled.label`
  font-size: 1.6rem;
  color: #545682;
  font-weight: 900;
  display: block;
  padding: 1rem 0;

  input {
    margin-top: 0.4rem;
  }
`;

const templates = [5, 10, 50, 100, 200, 500];

const Bet = () => {
  const [bet, { setBet }] = useBet();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value.replace("$", ""));

    setBet(value || 0);
  };

  return (
    <BetRoot>
      <Label>
        Your stake
        <Input value={"$" + String(bet)} onChange={handleChange} />
      </Label>

      <Templates>
        {templates.map((value) => (
          <TemplateButton onClick={() => setBet(value)} key={value}>
            ${value}.00
          </TemplateButton>
        ))}
      </Templates>
    </BetRoot>
  );
};

export default Bet;
