import mainScreen from './intro';
import greetingScreen from './greeting';
import addMarkup from './addMarkup';

addMarkup(mainScreen);
setTimeout(function () {
  if (document.querySelector(`.header__back`) !== null) {
    document.querySelector(`.header__back`).onclick = function () {
      addMarkup(greetingScreen);
    };
  }
}, 5000);
