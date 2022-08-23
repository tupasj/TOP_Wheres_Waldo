const targets = () => {
  const target1Discovered = () => {
    console.log("target 1 discovered");
  };

  const target2Discovered = () => {
    console.log("target 2 discovered");
  };

  const target3Discovered = () => {
    console.log("target 3 discovered");
  };

  const target1 = document.querySelector(".target1");
  const target2 = document.querySelector(".target2");
  const target3 = document.querySelector(".target3");

  target1.addEventListener("click", target1Discovered);
  target2.addEventListener("click", target2Discovered);
  target3.addEventListener("click", target3Discovered);
};

export { targets };