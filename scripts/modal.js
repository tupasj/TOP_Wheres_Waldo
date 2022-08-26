const updateScoreboardInfo = (data) => {
  const playerNames = Array.from(document.querySelectorAll('.player-name'));
  const playerScores = Array.from(document.querySelectorAll('.highscore-value'));
  for (let i = 0; i < data.length; i++) {
    playerNames[i].textContent = data[i].name;
    playerScores[i].textContent = data[i].score;
  };
};

const openModalGeneral = () => {
  const generalModal = document.querySelector('.general-modal');
  generalModal.showModal();
}

const openModalHighscores = (data) => {
  updateScoreboardInfo(data);
  const highscoresModal = document.querySelector(".highscores-modal");
  highscoresModal.showModal();
};

const closeModal = () => {
  const highscoresModal = document.querySelector(".highscores-modal");
  highscoresModal.close();
};

const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", closeModal);

export { openModalGeneral, openModalHighscores, closeModal, updateScoreboardInfo };
