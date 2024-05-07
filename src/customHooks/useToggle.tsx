import React, { useEffect, useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [toggleValue, setToggleValue] = useState<boolean>(false);

  function toggle() {
    setToggleValue((prev) => !prev);
  }

  return [toggleValue, toggle];
};
