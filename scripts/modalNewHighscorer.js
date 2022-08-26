import { getRankings, writeNewHighscorerData } from "../firebaseServices/firebaseDatabase.js";
import { updateScoreboardInfo } from "./modal.js";

const makeHighScorerInfo = () => {
  const usernameInput = document.querySelector(".username-input");
  const usernameInputValue = usernameInput.value;
  const timer = document.querySelector('.timer');
  const timerValue = parseInt(timer.textContent);
  const highScorerInfo = {
    name: usernameInputValue,
    score: timerValue,
  };
  return highScorerInfo;
};

const updateLocalRankings = (rankings) => {
  const newHighscorer = makeHighScorerInfo();
  let currentIndex;
  for (let i = 0; i < rankings.length; i++) {
    if (newHighscorer.score < rankings[i].score) {
      currentIndex = i;
      break;
    };
  };
  const updatedRankings = rankings.splice(currentIndex, 1, newHighscorer);
  updateScoreboardInfo(updatedRankings);
  return updatedRankings;
};

const updateHighscores = async () => {
  const rankings = await getRankings();
  const updatedRankings = updateLocalRankings(rankings);
  writeNewHighscorerData(rankings);
  updateScoreboardInfo(rankings);
};

export { updateHighscores };
