import img from './img';

const initialState = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

const games = Object.freeze({
  games1: {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    img1: img.photos[0],
    img2: img.paintings[2],
  },
  games2: {
    title: `Угадай, фото или рисунок?`,
    img1: img.paintings[1],
  },
  games3: {
    title: `Найдите рисунок среди изображений`,
    img1: img.photos[1],
    img2: img.paintings[0],
    img3: img.photos[2],
  }
});

const footerDate = Object({
  cop: 2016
});

export {initialState, games, footerDate};

