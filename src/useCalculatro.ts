import { useEffect, useState } from "react";

const useCalculator = () => {
  const [total, setTotal] = useState<number>(0);
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  const onAdd = (): void => {
    const total: number = number1 + number2;
    setTotal(total);
  };

  const onMultiply = (): void => {
    const total: number = number1 * number2;
    setTotal(total);
  };

  const onSubtract = (): void => {
    const total: number = number1 - number2;
    setTotal(total);
  };

  const onDivide = (): void => {
    const total: number = number1 / number2;
    setTotal(total);
  };

  return {
    state: {
      total,
      number1,
      number2,
    },
    actions: {
      setTotal,
      setNumber1,
      setNumber2,
      onAdd: onAdd,
      onMultiply,
      onSubtract,
      onDivide,
    },
  };
};

export default useCalculator;
