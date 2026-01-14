import { useState } from "react";

function useIteratorToUpdateState<T>(result?: T) {
  const [s, set] = useState({
    value: big,
    forceUpdate: 1,
  })

   const updateState = (big: T) => set(curr =>
    ({ value: big, forceUpdate: curr.forceUpdate + 1 })
  );

  return [s.value, updateState];
}
