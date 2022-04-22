import { atom, useRecoilState } from "recoil";

const betState = atom<number>({
  key: "Bet",
  default: 0,
});

const useBet = () => {
  const [state, setState] = useRecoilState(betState);

  const setBet = (value: number) => {
    setState(value);
  };

  return [state, { setBet }] as const;
};

export default useBet;
