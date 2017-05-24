let arr = [];
document.querySelectorAll(`template`).forEach(function (elem, i) {
  arr.push(elem);
});


function screenReplacement() {

  let screenNumber = prompt(`Какой экран показать 1-6`,'');
  switch (screenNumber) {
    case `1`:
      elem.innerHTML = ``;
      elem.appendChild(arr[0].content.cloneNode(true));
      break;
    case `2`:
      elem.innerHTML = ``;
      elem.appendChild(arr[1].content.cloneNode(true));
      break;
    case `3`:
      elem.innerHTML = ``;
      elem.appendChild(arr[2].content.cloneNode(true));
      break;
    case `4`:
      elem.innerHTML = ``;
      elem.appendChild(arr[3].content.cloneNode(true));
      break;
    case `5`:
      elem.innerHTML = ``;
      elem.appendChild(arr[4].content.cloneNode(true));
      break;
    case `6`:
      elem.innerHTML = ``;
      elem.appendChild(arr[5].content.cloneNode(true));
      break;
    default:
      alert(`Введите корректный номер`);
  }

}
screenReplacement();
