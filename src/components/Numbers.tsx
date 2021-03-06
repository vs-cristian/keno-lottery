import React, { useMemo } from "react";
import styled from "styled-components";
import useSelectedNumbers, { MAX_NUMBER } from "../hooks/useSelectedNumbers";
import { ButtonBase } from "./shared";

const NumbersRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 5rem;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`;

const Number = styled(ButtonBase)<{ active?: boolean }>`
  background: ${(p) => (p.active ? "#EB665F" : "#f4f5fb")};
  color: ${(p) => (p.active ? "#fff" : "#545682")};
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: none;
`;

type Props = {
  selectedNumbers: (number | null)[];
};

const numbersList = [...Array(MAX_NUMBER)].map((e, i) => i + 1);

const Numbers = ({ selectedNumbers }: Props) => {
  const [, { toggleNumber }] = useSelectedNumbers();

  return (
    <NumbersRoot>
      {numbersList.map((number, index) => (
        <Number
          key={index}
          active={selectedNumbers.includes(number)}
          onClick={() => toggleNumber(number)}
        >
          {number}
        </Number>
      ))}
    </NumbersRoot>
  );
};

export default Numbers;
