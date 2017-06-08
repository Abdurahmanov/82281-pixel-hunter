import img from './img';

const initialState = Object.freeze({
  lives: 3,
  time: 0,
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `fast`, `unknown`, `fast`, `wrong`],
});

const questions = [
  {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    img1: img.photos[Math.floor(Math.random() * 3)],
    img2: img.paintings[Math.floor(Math.random() * 3)],
    name1: `question1`,
    name2: `question2`,
  },
  {
    title: `Угадай, фото или рисунок?`,
    img1: img.paintings[Math.floor(Math.random() * 3)],
    name1: `question1`,
  },
  {
    title: `Найдите рисунок среди изображений`,
    img1: img.photos[Math.floor(Math.random() * 3)],
    img2: img.paintings[Math.floor(Math.random() * 3)],
    img3: img.photos[Math.floor(Math.random() * 3)]
  }
];

const bonusState = [
  {
    stats: initialState.stats,
    gameNumber: 1,
    bonus: [
      {
        name: `Бонус за скорость`,
        justBonus: 1,
        points: 50,
        total: 50,
        nameClass: `fast`
      },
      {
        name: `Бонус за жизнь`,
        justBonus: 2,
        points: 50,
        total: 100,
        nameClass: `heart`
      },
      {
        name: `Штраф за медлительность`,
        justBonus: 2,
        points: 50,
        total: -100,
        nameClass: `slow`
      }
    ],
    totalPointsStats: 900,
    dublePoints: 100,
    amountPoints: 900
  },
  {
    stats: initialState.stats,
    gameNumber: 1,
    bonus: [
      {
        name: `Бонус за жизнь`,
        justBonus: 2,
        points: 50,
        total: 100,
        nameClass: `heart`
      },
    ],
    totalPointsStats: 900,
    dublePoints: 100,
    amountPoints: 900
  }
];

const footerDate = Object({
  cop: 2016
});

export {initialState, questions, footerDate, bonusState};

