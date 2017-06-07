import img from './img';

const initialState = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
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

const footerDate = Object({
  cop: 2016
});

export {initialState, questions, footerDate};

