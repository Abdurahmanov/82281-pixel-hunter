import addMarkup from './addMarkup';
import game3Screen from './game-3';
import header from './header';
import {initialState, games} from './data';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';
const moduleGame2 = `
  ${header(initialState)}
  <div class="game game_2">
    <p class="game__task">${games.games2.title}</p>
    <form class="game__content  game__content--wide">
      ${games.games2.option}
    </form>
     ${statsBlock}
  </div>
  ${footer}
`;

let gameTwoScreen = {
  template: moduleGame2,
  afterLoaded() {
    const question1 = document.getElementsByName(`question1`);
    document.querySelector(`.game__content`).onchange = function () {
      if (question1[0].checked || question1[1].checked) {
        addMarkup(game3Screen);
      }
    };
    document.querySelector(`.header__back`).onclick = () => addMarkup(greetingScreen);
  }
};

export default gameTwoScreen;
