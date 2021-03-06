import addMarkup from './addMarkup';
import game2Screen from './game-2';
import {initialState, questions} from './data';
import header from './header';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';

const drawQuestion1 = (game) =>{
  return `
    ${[...game].map(({img, name}) => {
      return `
             <div class="game__option" >
                <img src="${img}" alt="Option 1">
                <label class="game__answer game__answer--photo">
                <input name="${name}" type="radio" value="photo">
                <span>Фото</span>
                </label>
                <label class="game__answer game__answer--paint">
                <input name="${name}" type="radio" value="paint">
                <span>Рисунок</span>
                </label>
             </div>`;
    }).join(``)}`;
};

const moduleGame1 = `
  ${header(initialState)}
  <div class="game game_1">
    <p class="game__task">${questions[0].title}</p>
    <form class="game__content">
      ${drawQuestion1(questions[0].game)}
    </form>
      <div class="stats">
         ${statsBlock(initialState.stats)}
      </div>
  </div>
  ${footer}
`;

const gameOneScreen = {
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
