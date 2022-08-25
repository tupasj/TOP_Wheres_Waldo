import { openModalHighscores } from "./modal.js";
import { getRankings } from "../firebaseServices/firebaseDatabase.js";
import { gameTimer } from "./timerFactory.js";

const targets = () => {
  const unmarkedTargets = ["target1", "target2", "target3"];
  const markedTargets = [];

  const getUserScore = (timer) => {
    let userScore = timer.getTime();
    userScore = Math.round(userScore / 1000);
    return userScore;
  };

  const markTarget = (targetName) => {
    const targetIndex = unmarkedTargets.indexOf(targetName);
    if (targetIndex !== -1) {
      unmarkedTargets.splice(targetIndex, 1);
      markedTargets.push(targetName);
    };
  };

  const updateSidebar = (targetImage, targetText) => {
    targetImage.style.opacity = 0.25;
    targetText.style.textDecoration = 'line-through';
  };

  const checkForCompletion = async () => {
    if (markedTargets.length === 3) {
      gameTimer.stop();
      const userScore = getUserScore(gameTimer);
      // Get rankings array from database
      const rankings = await getRankings();
      for (let i = 0; i < rankings.length; i++) {
        if (userScore < rankings[i].score) {
          // Replace rankings[i] object with a new object returned by openModalHighScores
          const newHighscore = await openModalHighscores(userScore);
          const index = rankings.indexOf(rankings[i]);
          rankings.splice(index, 1, newHighscore);
          return;
        } else {
          // openModalDefault()
        }
      };
    };
  };

  const targetDiscovered = (targetName, targetImage, targetText) => {
    markTarget(targetName);
    updateSidebar(targetImage, targetText);
    checkForCompletion();
  };

  const target1 = document.querySelector(".target1");
  const target1Img = document.querySelector("#target1-sidebar > img");
  const target1Txt = document.querySelector("#target1-sidebar > span");
  const target2 = document.querySelector(".target2");
  const target2Img = document.querySelector("#target2-sidebar > img");
  const target2Txt = document.querySelector("#target2-sidebar > span");
  const target3 = document.querySelector(".target3");
  const target3Img = document.querySelector("#target3-sidebar > img");
  const target3Txt = document.querySelector("#target3-sidebar > span");

  target1.addEventListener("click", () => {
    targetDiscovered("target1", target1Img, target1Txt);
  });
  target2.addEventListener("click", () => {
    targetDiscovered("target2", target2Img, target2Txt);
  });
  target3.addEventListener("click", () => {
    targetDiscovered("target3", target3Img, target3Txt);
  });
};

export { targets };
