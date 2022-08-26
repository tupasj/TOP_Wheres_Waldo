import { targets, clearSidebar } from "./scripts/targets.js";
import { updateHighscores } from "./scripts/modalNewHighscorer.js";
import { gameTimer } from "./scripts/timerFactory.js";

targets();

const usernameSubmitBtn = document.querySelector(".username-submit-btn");
usernameSubmitBtn.addEventListener("click", updateHighscores);

const playAgainButton = document.querySelectorAll(".play-again-button");
playAgainButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.querySelectorAll(".modal");
    modal.forEach((element) => element.close());
    clearSidebar();
    gameTimer.reset();
  });
});
