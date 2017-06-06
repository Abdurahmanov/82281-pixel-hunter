import addMarkup from './addMarkup';
import statsScreen from './stats';
import header from './header';
import {initialState, games} from './data';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';

const moduleGame3 = `
  ${header(initialState)}
  <div class="game">
    <p class="game__task">${games[2].title}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${games[2].img1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${games[2].img2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${games[2].img3}" alt="Option 1" width="304" height="455">
      </div>
    </form>
     ${statsBlock}
  </div>
  ${footer}
`;

const gameThreeScreen = {
  template: moduleGame3,
  afterLoaded() {
    const gameOption = document.querySelectorAll(`.game__option`);
    for (let i = 0; i < gameOption.length; i++) {
      gameOption[i].onclick = () => addMarkup(statsScreen);
    }
    document.querySelector(`.header__back`).onclick = () => addMarkup(greetingScreen);
  }
};

export default gameThreeScreen;
