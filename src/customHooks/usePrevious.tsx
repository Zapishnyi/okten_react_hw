import React, { useEffect, useRef } from "react";

export const usePrevious = (value: string) => {
  let values = useRef<string[]>([]);
  useEffect(() => {
    values.current.push(value);
  }, [value]);
  return values.current;
};
