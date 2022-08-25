const ref = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

ref.btnStart.addEventListener('click', btnStartHandler);
ref.btnStop.addEventListener('click', btnStopHandler);
ref.btnStop.disabled = true;
let counterId = null;

function btnStartHandler(e) {
  ref.btnStop.disabled = false;
  ref.btnStart.disabled = true;
  counterId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function btnStopHandler(e) {
  ref.btnStop.disabled = true;
  ref.btnStart.disabled = false;
  clearInterval(counterId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
