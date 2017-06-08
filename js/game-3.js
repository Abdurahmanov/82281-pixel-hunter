import addMarkup from './addMarkup';
import statsScreen from './stats';
import header from './header';
import {initialState, questions} from './data';
import statsBlock from './statsBlock';
import footer from './footer';
import greetingScreen from './greeting';

const drawQuestion3 = (game) =>{
  return `
    ${[...game].map(({img}) => {
      return `
             <div class="game__option" >
                <img src="${img}" alt="Option 1" >
             </div>`;
    }).join(``)}`;
};


const moduleGame3 = `
  ${header(initialState)}
  <div class="game">
    <p class="game__task">${questions[2].title}</p>
    <form class="game__content  game__content--triple">
       ${drawQuestion3(questions[2].game)}
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
