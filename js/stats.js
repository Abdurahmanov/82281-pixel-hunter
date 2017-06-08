import addMarkup from './addMarkup';
import header from './header';
import {initialState, bonusState} from './data';
import greetingScreen from './greeting';
import statsBlock from './statsBlock';
import footer from './footer';

const dataData = (bonus) => {
  return `
  ${[...bonus].map(({name, justBonus, points, total, nameClass}) => {
    return `
             <tr>
               <td></td>
               <td class="result__extra">${name}</td>
               <td class="result__extra">${justBonus}&nbsp;<span class="stats__result stats__result--${nameClass}"></span></td>
               <td class="result__points">×&nbsp;${points}</td>   
               <td class="result__total">${total}</td>
             </tr>`;
  }).join(``)}`;
};

const tableHtml = ({gameNumber, stats, dublePoints, totalPointsStats, amountPoints, bonus}) => {
  return `
      <tr>
        <td class="result__number">${gameNumber}.</td>
        <td colspan="2">${statsBlock(stats)}</td>
        <td class="result__points">×&nbsp;${dublePoints}</td>
        <td class="result__total">${totalPointsStats}</td>
      </tr>
        ${dataData(bonus)}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${amountPoints}</td>
      </tr>
  `;
};

const moduleStats = `
    ${header(initialState)}
  <div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
       ${tableHtml(bonusState[0])}
       ${tableHtml(bonusState[1])}
    </table>
  </div>
  ${footer}
`;

const statsScreen = {
  template: moduleStats,
  afterLoaded() {
    document.querySelector(`.header__back`).onclick = () => addMarkup(greetingScreen);
  }
};

export default statsScreen;
