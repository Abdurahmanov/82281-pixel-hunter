import img from './img';
const initialState = Object.freeze({
  level: 0,
  lives: 1,
  time: 0
});

const games = Object.freeze({
  games1: {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    option: `
      <div class="game__option">
        <img src="${img.paintings[Math.floor(0 + Math.random() * (2 + 1 - 0))]}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${img.photos[Math.floor(0 + Math.random() * (2 + 1 - 0))]}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    `
  },
  games2: {
    title: `Угадай, фото или рисунок?`,
    option: `
      <div class="game__option">
        <img src="${img.photos[Math.floor(0 + Math.random() * (2 + 1 - 0))]}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    `
  },
  games3: {
    title: `Найдите рисунок среди изображений`,
    option: `
      <div class="game__option">
        <img src="${img.photos[Math.floor(0 + Math.random() * (2 + 1 - 0))]}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${img.photos[Math.floor(0 + Math.random() * (2 + 1 - 0))]}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${img.paintings[Math.floor(0 + Math.random() * (2 + 1 - 0))]}" alt="Option 1" width="304" height="455">
      </div>
    `
  }
});

export {initialState, games};

