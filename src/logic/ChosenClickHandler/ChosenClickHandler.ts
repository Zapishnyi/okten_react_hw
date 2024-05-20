import React from "react";

export const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  document.querySelector(".chosen")?.classList.remove("chosen");
  const chosenCard = e.target as HTMLDivElement;
  chosenCard.classList.add("chosen");
};
