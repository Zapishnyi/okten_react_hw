const clearMarks = () => {
  document
    .querySelectorAll(".carLink")
    .forEach((e) => e.classList.remove("pressedLink"));

  document
    .querySelectorAll(".carWrapper")
    .forEach((e) => e.classList.remove("pressedWrapper"));
};

export default clearMarks;
