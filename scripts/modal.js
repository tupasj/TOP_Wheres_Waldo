import { getRankings } from "../firebaseServices/firebaseDatabase.js";

const openModal = () => {
  const highscoresModal = document.querySelector(".highscores-modal");
  highscoresModal.showModal();
};

const makeHighScorerInfo = (userScore) => {
  const usernameInput = document.querySelector(".username-input");
  const usernameInputValue = usernameInput.textContent;
  const highScorerInfo = {
    name: usernameInputValue,
    score: userScore,
  };
  return highScorerInfo;
};

const openModalHighscores = async (userScore) => {
  const highscoresModal = document.querySelector(".highscores-modal");
  highscoresModal.showModal();

  // Display names and score
  const rankings = await getRankings();
  const playerNames = Array.from(document.querySelectorAll('.player-name'));
  const playerScores = Array.from(document.querySelectorAll('.highscore-value'));
  for (let i = 0; i < playerNames.length; i++) {
    playerNames[i].textContent = rankings[i].name;
    playerScores[i].textContent = rankings[i].score;
  };

  const userHighscore = makeHighScorerInfo(userScore);
  return userHighscore;
};

const closeModal = () => {
  const highscoresModal = document.querySelector(".highscores-modal");
  highscoresModal.close();
};

const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", closeModal);

export { openModal, closeModal, openModalHighscores };
