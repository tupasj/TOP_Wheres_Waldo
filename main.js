import { targets } from "./scripts/targets.js";
import { updateHighscores } from "./scripts/modalNewHighscorer.js";

targets();

const usernameSubmitBtn = document.querySelector(".username-submit-btn");
usernameSubmitBtn.addEventListener("click", updateHighscores);

const playAgainButton = document.querySelector(".play-again-button");
playAgainButton.addEventListener("click", () => {

});