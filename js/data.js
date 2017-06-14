import img from './img';

const initialState = Object.freeze({
  lives: 3,
  time: 0,
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `fast`, `unknown`, `fast`, `wrong`],
});

const questions = [
  {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: img.photos[Math.floor(Math.random() * 3)],
        answer: `photo`,
        name: `question1`,
      },
      {
        img: img.paintings[Math.floor(Math.random() * 3)],
        answer: `paint`,
        name: `question2`,
      }
    ],
  },
  {
    title: `Угадай, фото или рисунок?`,
    answers: [
      {
        img: img.paintings[Math.floor(Math.random() * 3)],
        answer: `paint`,
        name: `question1`,
      }
    ],
  },
  {
    title: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: img.photos[Math.floor(Math.random() * 3)],
        answer: `photo`,
      },
      {
        img: img.paintings[Math.floor(Math.random() * 3)],
        answer: `paint`,
      },
      {
        img: img.photos[Math.floor(Math.random() * 3)],
        answer: `photo`,
      },
    ],
  },
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

