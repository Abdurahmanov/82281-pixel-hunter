import addMarkup from './addMarkup';
import greetingScreen from './greeting';
import footer from './footer';
const moduleIntro = `
<div id="main" class="central__content">
<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
 ${footer}
`;

let introScreen = {
  template: moduleIntro,
  afterLoaded() {
    document.querySelector(`.intro__asterisk`).onclick = () => addMarkup(greetingScreen);
  }
};

export default introScreen;
