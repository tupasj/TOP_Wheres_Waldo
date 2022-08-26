import { openModalGeneral, openModalHighscores } from "./modal.js";
import { getRankings } from "../firebaseServices/firebaseDatabase.js";
import { gameTimer } from "./timerFactory.js";

const getUserScore = (timer) => {
  let userScore = timer.getTime();
  userScore = Math.round(userScore / 1000);
  return userScore;
};

const endGame = async () => {
  gameTimer.stop();
  const userScore = getUserScore(gameTimer);
  const rankings = await getRankings();
  for (let i = 0; i < rankings.length; i++) {
    if (userScore < rankings[i].score) {
      openModalHighscores(rankings);
      return;
    } else {
      openModalGeneral();
    };
  };
};

export { endGame };
