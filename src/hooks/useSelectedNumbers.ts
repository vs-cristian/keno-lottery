import { useMemo } from "react";
import { atom, useRecoilState } from "recoil";

export type SelectedNumbersState = (number | null)[];

const initialState = [null, null, null, null, null];

export const MAX_NUMBER = 80;

const selectedNumbersState = atom<SelectedNumbersState>({
  key: "SelectedNumbers",
  default: initialState,
});

const useSelectedNumbers = () => {
  const [state, setState] = useRecoilState(selectedNumbersState);

  const isEmpty = useMemo(() => !state.some(Boolean), [state]);
  const isFullFiled = useMemo(
    () => !state.some((number) => number === null),
    [state]
  );

  const _updateAtIndex =
    (index: number, value: SelectedNumbersState[number]) =>
    (state: SelectedNumbersState) => {
      const newState = [...state];

      newState[index] = value;

      return newState;
    };

  const _getUpdateIndex = () => {
    const index = state.findIndex((number) => number === null);

    if (index > -1) {
      return index;
    }

    return state.length - 1;
  };

  const unselectNumberByIndex = (index: number) => {
    setState(_updateAtIndex(index, null));
  };

  const selectNumber = (number: number) => {
    const index = _getUpdateIndex();
    setState(_updateAtIndex(index, number));
  };

  const toggleNumber = (number: number) => {
    const index = state.findIndex((stateNumber) => stateNumber === number);

    if (index > -1) {
      unselectNumberByIndex(index);
    } else {
      selectNumber(number);
    }
  };

  const resetNumbers = () => {
    setState(initialState);
  };

  const randomizeNumbers = () => {
    const numbers = [];
    while (numbers.length < initialState.length) {
      const r = Math.floor(Math.random() * MAX_NUMBER) + 1;
      if (numbers.indexOf(r) === -1) numbers.push(r);
    }

    setState(numbers);
  };

  return [
    state,
    {
      unselectNumberByIndex,
      selectNumber,
      toggleNumber,
      resetNumbers,
      randomizeNumbers,
    },
    {
      isEmpty,
      isFullFiled,
    },
  ] as const;
};

export default useSelectedNumbers;
