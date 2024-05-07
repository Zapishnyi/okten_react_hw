import React, { useEffect } from "react";

export const useStorage = (valueKey: string, value: string): void => {
  useEffect(() => {
    if (valueKey) {
      localStorage.setItem(valueKey, value);
    }
  }, [valueKey, value]);
};
