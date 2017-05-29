export default function getElementFromTemplate(template, clickSelector, nextScreen) {
  const mainBlock = document.getElementById(`main`);
  mainBlock.innerHTML = template;
  document.querySelector(clickSelector).onclick = () => getElementFromTemplate(nextScreen);
}
