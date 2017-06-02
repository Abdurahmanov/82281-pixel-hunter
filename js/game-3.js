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
    <p class="game__task">${games.games3.title}</p>
    <form class="game__content  game__content--triple">
      ${games.games3.option}
    </form>
     ${statsBlock}
  </div>
  ${footer}
`;

let gameThreeScreen = {
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
