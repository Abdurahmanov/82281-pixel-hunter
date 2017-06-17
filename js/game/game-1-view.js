import view from '../AbstractView';
import {initialState, questions} from '../data';
import statsBlock from '../statsBlock';
import footer from '../footer';
import header from '../header';
import greeting from '../greeting/greeting';

const drawQuestion1 = (answers) =>{
  return `
    ${[...answers].map(({img, name}) => {
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

export default class Game1View extends view {
  get template() {
    return `
     ${header(initialState)}
  <div class="game game_1">
    <p class="game__task">${questions[0].title}</p>
    <form class="game__content">
      ${drawQuestion1(questions[0].answers)}
    </form>
      <div class="stats">
         ${statsBlock(initialState.stats)}
      </div>
  </div>
  ${footer} `;
  }
  bind() {
    document.querySelector(`.header__back`).onclick = () => greeting();
  }
}
