import { endGame } from "./endGame.js";

const targets = () => {
  const unmarkedTargets = ["target1", "target2", "target3"];
  const markedTargets = [];

  const markTarget = (targetName) => {
    const targetIndex = unmarkedTargets.indexOf(targetName);
    if (targetIndex !== -1) {
      unmarkedTargets.splice(targetIndex, 1);
      markedTargets.push(targetName);
    }
  };

  const updateSidebar = (targetImage, targetText) => {
    targetImage.style.opacity = 0.25;
    targetText.style.textDecoration = "line-through";
  };

  const targetDiscovered = (targetName, targetImage, targetText) => {
    markTarget(targetName);
    updateSidebar(targetImage, targetText);
    if (markedTargets.length === 3) {
      endGame();
    };
  };

  const target1 = document.querySelector(".target1");
  const target2 = document.querySelector(".target2");
  const target3 = document.querySelector(".target3");

  target1.addEventListener("click", () => {
    const targetImage = document.querySelector("#target1 > img");
    const targetText = document.querySelector("#target1 > span");
    targetDiscovered("target1", targetImage, targetText);
  });
  target2.addEventListener("click", () => {
    const targetImage = document.querySelector("#target2 > img");
    const targetText = document.querySelector("#target2 > span");
    targetDiscovered("target2", targetImage, targetText);
  });
  target3.addEventListener("click", () => {
    const targetImage = document.querySelector("#target3 > img");
    const targetText = document.querySelector("#target3 > span");
    targetDiscovered("target3", targetImage, targetText);
  });
};

const clearSidebar = () => {
  const targetImages = document.querySelectorAll(".target > img");
  targetImages.forEach((img) => (img.style.opacity = 1));
  const targetTexts = document.querySelectorAll(".target > span");
  targetTexts.forEach((txt) => (txt.style.textDecoration = "none"));
};

export { targets, clearSidebar };
