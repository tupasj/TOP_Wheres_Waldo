const timerFactory = () => {
  let isRunning = false;
  let startTime = 0;
  let overallTime = 0;

  const _getTimeElapsedSinceLastStart = () => {
    if (!startTime) {
      return 0;
    };
    return Date.now() - startTime;
  };

  const start = () => {
    if (isRunning) {
      return console.error("Time is already running");
    };
    isRunning = true;
    startTime = Date.now();
  };

  const stop = () => {
    if (!isRunning) {
      return console.error("Timer is already stopped");
    };
    isRunning = false;
    overallTime = overallTime + _getTimeElapsedSinceLastStart();
  };

  const reset = () => {
    overallTime = 0;
    if (isRunning) {
      startTime = Date.now();
      return;
    };
    startTime = 0;
  };

  const getTime = () => {
    if (!startTime) {
      return 0;
    };
    if (isRunning) {
      return overallTime + _getTimeElapsedSinceLastStart();
    };
    return overallTime;
  };

  return { start, stop, reset, getTime };
};

const gameTimer = timerFactory();

const startTimer = () => {
  gameTimer.start();
  setInterval(() => {
    const timeInSeconds = Math.round(gameTimer.getTime() / 1000);
    document.querySelector(".timer").textContent = `${timeInSeconds}`;
  }, 100);
};

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startTimer);

export { timerFactory, gameTimer };
