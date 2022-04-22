import useBet from "./useBet";
import useSelectedNumbers from "./useSelectedNumbers";

const useReset = () => {
  const [, { resetNumbers }] = useSelectedNumbers();
  const [, { setBet }] = useBet();

  return () => {
    resetNumbers();
    setBet(0);
  };
};

export default useReset;
