import colors from './colors.js';

const COLORPICKER_DELAY = 1000;

const min = 0;
const max = colors.length - 1;
let intervalId = null;
let btnClicked = false;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStoptClick);
 
function onBtnStartClick() {
  if (btnClicked) {
    return;
  }
    intervalId = setInterval(() => {
      const index = randomIntegerFromInterval(min, max);
      console.log(index);
      document.body.style.backgroundColor = colors[index];
    }, COLORPICKER_DELAY);
  //refs.btnStart.disabled = true;
  btnClicked = true;
};

function onBtnStoptClick() {
  btnClicked = false;
  clearInterval(intervalId);
  //refs.btnStart.disabled = false;
};