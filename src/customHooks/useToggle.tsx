import React, { useEffect, useState } from "react";

export const useToggle = (trigger: number) => {
  const [toggleValue, setToggleValue] = useState<boolean>(false);
  useEffect(() => {
    setToggleValue((prev) => !prev);
  }, [trigger]);
  return toggleValue;
};
