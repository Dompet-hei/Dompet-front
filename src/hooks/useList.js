import { useState } from "react";

const useList = (init = []) => {
  const [valueState, setValueState] = useState(init);

  const append = (i) => {
    const newValue = valueState.slice();
    newValue.push(i);
    setValueState(newValue);
  };

  const clear = () => {
    setValueState([]);
  };

  return [valueState, setValueState, append, clear];
};

export default useList;
