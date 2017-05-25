let arr = [];
document.querySelectorAll(`template`).forEach(function (elem, i) {
  arr.push(elem);
});


function screenReplacement(screenNumber) {
  let element = document.getElementById(`elem`);

  switch (screenNumber) {
    case 0:
      break;
    case 1:
      element.innerHTML = ``;
      element.appendChild(arr[0].content.cloneNode(true));
      break;
    case 2:
      element.innerHTML = ``;
      element.appendChild(arr[1].content.cloneNode(true));
      break;
    case 3:
      element.innerHTML = ``;
      element.appendChild(arr[2].content.cloneNode(true));
      break;
    case 4:
      element.innerHTML = ``;
      element.appendChild(arr[3].content.cloneNode(true));
      break;
    case 5:
      element.innerHTML = ``;
      element.appendChild(arr[4].content.cloneNode(true));
      break;
    case 6:
      element.innerHTML = ``;
      element.appendChild(arr[5].content.cloneNode(true));
      break;
  }

}

let screenNumber = 0;

document.onkeydown = function (e) {
  if (e.altKey && e.keyCode === 37) {
    screenNumber = screenNumber - 1;
  } else if (e.altKey && e.keyCode === 39) {
    screenNumber = screenNumber + 1;
  }
  if (screenNumber >= 6) {
    screenNumber = 6;
  } else if (screenNumber <= 0) {
    screenNumber = 1;
  }
  screenReplacement(screenNumber);
};

setTimeout(function () {
  screenReplacement(1);
}, 3000);

