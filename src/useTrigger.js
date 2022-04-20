import { useState } from "react";

function useTrigger() {
  const [state, setState] = useState(false);
  const handleUpdate = () => {
    setState(false);
    setState(!state);
  };
  return [state, handleUpdate];
}

export default useTrigger;
