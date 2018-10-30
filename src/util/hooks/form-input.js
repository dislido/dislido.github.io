import { useState } from 'react';

export function useNumberInput(init) {
  const [value, setNum] = useState(init);
  const onChange = val => setNum(+val);
}
