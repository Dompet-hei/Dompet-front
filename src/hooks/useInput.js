import { useState } from "react";

const useInput = (init) => {
  const [valueState, setValueState] = useState(init);

  const onChange = (e) => {
    setValueState(e.target.value);
  };

  const clear = () => {
    setValueState(init);
  };

  return [valueState, onChange, clear, setValueState];
};

export default useInput;
