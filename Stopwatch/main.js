const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let intervalId;
let elapsedTime = 0;

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTime() {
  elapsedTime++;
  display.textContent = formatTime(elapsedTime);
}

function start() {
  intervalId = setInterval(updateTime, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stop() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function reset() {
  clearInterval(intervalId);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);