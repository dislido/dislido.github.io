import { useState } from 'react';

export function useNumberState(init) {
  const [value, setValue] = useState(init);
  const setState = val => setValue(+val || 0);
  return [value, setState];
}

export function tmp() {

}
