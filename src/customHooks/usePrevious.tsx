import React, { useRef } from "react";

interface IReturnProps {
  previousValue: any;
  currentValue: any;
  pushNewValue: (newValue: any) => void;
}

export const usePrevious = (): IReturnProps => {
  let values: React.MutableRefObject<any> = useRef(["", ""]);
  const pushNewValue = (newValue: any): void => {
    if (values.current.length === 2) {
      values.current.shift();
      values.current.push(newValue);
    } else {
      values.current.push(newValue);
    }
  };
  return {
    previousValue: values.current[0],
    currentValue: values.current[1],
    pushNewValue,
  };
};
