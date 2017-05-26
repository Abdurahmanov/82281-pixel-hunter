const template = document.querySelectorAll(`template`);
const screenArr = [].slice.call(template);

function screenReplacement(screenNumber) {
  const element = document.getElementById(`main-block`);
  element.innerHTML = ``;
  element.appendChild(screenArr[screenNumber - 1].content.cloneNode(true));
}

let screenNumber = 0;

document.onkeydown = (e)=> {
  if (e.altKey && e.keyCode === 37) {
    screenNumber--;
  } else if (e.altKey && e.keyCode === 39) {
    screenNumber++;
  }

  screenNumber = Math.min(screenNumber, 6);
  screenNumber = Math.max(screenNumber, 1);
  screenReplacement(screenNumber);
};

setTimeout(function () {
  screenReplacement(1);
}, 3000);

