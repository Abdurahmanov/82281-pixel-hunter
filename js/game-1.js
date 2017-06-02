import addMarkup from './addMarkup';
import game2Screen from './game-2';
import {initialState, games} from './data';
import header from './header';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';
const moduleGame1 = `
  ${header(initialState)}
  <div class="game game_1">
    <p class="game__task">${games.games1.title}</p>
    <form class="game__content">
      ${games.games1.option}
    </form>
     ${statsBlock}
  </div>
  ${footer}
  
`;
let gameOneScreen = {
  template: moduleGame1,
  afterLoaded() {
    const question1 = document.getElementsByName(`question1`);
    const question2 = document.getElementsByName(`question2`);
    document.querySelector(`.game__content`).onchange = function () {
      for (let i = 0; i < question1.length; i++) {
        for (let j = 0; j < question2.length; j++) {
          if (question1[i].checked && question2[j].checked) {
            addMarkup(game2Screen);
            return;
          }
        }
      }
    };
    document.querySelector(`.header__back`).onclick = () => addMarkup(greetingScreen);
  }
};

export default gameOneScreen;
