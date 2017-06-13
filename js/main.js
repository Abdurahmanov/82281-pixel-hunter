import mainScreen from './intro';
import addMarkup from './addMarkup';

addMarkup(mainScreen);

import img from './img';

const loadImage = (src, callback) => {
  const photo = new Image();
  photo.onload = photo.onerror = (evt) => {
    callback(evt.type === `error`, photo);
    photo.onload = photo.onerror;
  };
  photo.src = src;
};


loadImage(img.photos[Math.floor(Math.random() * 3)], (err, photo) => {
  if (err) {
    // image not loaded
  } else {
    // let width = photo.width;
  }
});
