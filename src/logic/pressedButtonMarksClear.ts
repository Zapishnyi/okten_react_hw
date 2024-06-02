const clearMarks = () => {
  document
    .querySelectorAll(".carLink")
    .forEach((e) => e.classList.remove("pressed"));
};

export default clearMarks;
