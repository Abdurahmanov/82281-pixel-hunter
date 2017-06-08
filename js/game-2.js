import addMarkup from './addMarkup';
import game3Screen from './game-3';
import header from './header';
import {initialState, questions} from './data';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';

const moduleGame2 = `
  ${header(initialState)}
  <div class="game game_2">
    <p class="game__task">${questions[1].title}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option" >
        <img src="${questions[1].img1}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
     <div class="stats">
         ${statsBlock(initialState.stats)}
      </div>
  </div>
  ${footer}
`;

const gameTwoScreen = {
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
