import React, { useRef } from "react";

export const usePrevious = (): [string[], (newValue: string) => void] => {
  let values = useRef<string[]>([]);
  const pushNewValue = (newValue: string): void => {
    values.current.push(newValue);
  };
  return [values.current, pushNewValue];
};
