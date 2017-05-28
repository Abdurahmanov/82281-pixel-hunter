import addMarkup from './addMarkup';
import greetingScreen from './greeting';
const moduleIntro = `
<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
`;

setTimeout(function () {
  if (document.querySelector(`.intro__asterisk`) !== null) {
    document.querySelector(`.intro__asterisk`).onclick = function () {
      addMarkup(greetingScreen);
    };
  }
}, 10)




export default moduleIntro;
