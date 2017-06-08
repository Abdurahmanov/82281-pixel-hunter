import addMarkup from './addMarkup';
import statsScreen from './stats';
import header from './header';
import {initialState, questions} from './data';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';

const questionGame3 = (img) => `
<div class="game__option" >
    <img src="${img}" alt="Option 1" width="304" height="455">
  </div>
  `;

const moduleGame3 = `
  ${header(initialState)}
  <div class="game">
    <p class="game__task">${questions[2].title}</p>
    <form class="game__content  game__content--triple">
      ${questionGame3(questions[2].img1)}
      ${questionGame3(questions[2].img2)}
      ${questionGame3(questions[2].img3)}
    </form>
    <div class="stats">
         ${statsBlock(initialState.stats)}
      </div>
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
