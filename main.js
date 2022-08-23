import { timer } from "./timer.js";

const target1Discovered = () => {
  console.log("target 1 discovered");
};

const target2Discovered = () => {
  console.log("target 2 discovered");
};

const target3Discovered = () => {
  console.log("target 3 discovered");
};

const gameTimer = timer();
gameTimer.start();
setInterval(() => {
  const timeInSeconds = Math.round(gameTimer.getTime() / 1000);
  document.querySelector(".timer").textContent = timeInSeconds;
}, 100);
