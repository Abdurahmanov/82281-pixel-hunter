const screenArr = [];
document.querySelectorAll(`template`).forEach((elem)=> {
  screenArr.push(elem);
});
// const screenArr = Array.prototype.slice.call(document.querySelectorAll(`template`));


function screenReplacement(screenNumber) {
  let element = document.getElementById(`main-block`);

  switch (screenNumber) {
    case screenNumber:
      element.innerHTML = ``;
      element.appendChild(screenArr[screenNumber - 1].content.cloneNode(true));
      break;
  }

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

