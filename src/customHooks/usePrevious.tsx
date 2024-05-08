import React, { useRef } from "react";

export const usePrevious: () => [any[], (newValue: any) => void] = () => {
  let values: React.MutableRefObject<any> = useRef([]);
  const pushNewValue = (newValue: any): void => {
    values.current.push(newValue);
  };
  return [values.current, pushNewValue];
};
