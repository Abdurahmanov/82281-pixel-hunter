import view from '../AbstractView';
import footer from '../footer';
import header from '../header';
import {initialState} from '../data';
import game from '../game/game';
import greeting from '../greeting/greeting';

export default class RulesView extends view {
  get template() {
    return `
     ${header(initialState)}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer} `;
  }
  bind() {
    const rulesButton = document.querySelector(`.rules__button`);
    const rulesInput = document.querySelector(`.rules__input`);
    rulesInput.onkeyup = function () {
      if (rulesInput.value.length !== 0) {
        rulesButton.removeAttribute(`disabled`);
      } else {
        rulesButton.setAttribute(`disabled`);
      }
    };
    rulesButton.onclick = (e) => {
      e.preventDefault();
      game();
    };
    document.querySelector(`.header__back`).onclick = () => greeting();
  }
}
